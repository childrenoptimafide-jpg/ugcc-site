/**
 * Cloudflare Pages Function: POST /api/prayer-intention
 *
 * Приймає молитовне намірення з сайту і пересилає його
 * у Telegram-бот (через Telegram Bot API).
 *
 * ============================================================
 *  НАСТРОЙКИ — заполните два значения ниже
 * ============================================================
 *  1) BOT_TOKEN — токен бота от @BotFather
 *     (получить / обновить: @BotFather -> /mybots -> ваш бот -> API Token,
 *      или /revoke для генерации нового)
 *
 *  2) CHAT_ID — ваш Telegram chat_id (число)
 *     (узнать: https://api.telegram.org/bot<ТОКЕН>/getUpdates -> "chat":{"id": ...})
 *
 *  ВАЖНО: после того как поменяли токен в BotFather (/revoke),
 *  подставьте сюда НОВЫЙ токен, сохраните и задеплойте сайт.
 * ============================================================
 */

const BOT_TOKEN = "";
const CHAT_ID   = "";

// Опционально: ID темы в супергруппе (message_thread_id). "" = без темы.
const THREAD_ID = "";

// ============================================================
// Дальше ничего менять не нужно
// ============================================================

const LANG_LABEL = {
  ua: "🇺🇦 Українська",
  en: "🇬🇧 English",
  ru: "🇷🇺 Русский"
};

export async function onRequestPost({ request, env }) {
  try {
    // Разбор тела
    let data = null;
    try {
      data = await request.json();
    } catch (_) {
      return json({ ok: false, error: "invalid_json" }, 400);
    }
    if (!data || typeof data !== "object") {
      return json({ ok: false, error: "invalid_payload" }, 400);
    }

    // Валидация
    const intention = sanitize(data.intention, 3000);
    if (!intention || intention.length < 3) {
      return json({ ok: false, error: "intention_required" }, 400);
    }

    const name    = sanitize(data.name,    120);
    const forWhom = sanitize(data.forWhom, 200);
    const contact = sanitize(data.contact, 200);
    const lang    = sanitize(data.lang,    10) || "ua";
    const page    = sanitize(data.page,    300);

    // Токен и chat_id — сначала из env (если заданы), иначе из констант выше
    const token  = (env && env.TELEGRAM_BOT_TOKEN) || BOT_TOKEN;
    const chatId = (env && env.TELEGRAM_CHAT_ID)   || CHAT_ID;
    const thread = (env && env.TELEGRAM_THREAD_ID) || THREAD_ID;

    if (!token || token.includes("ВСТАВЬТЕ") || !chatId) {
      console.warn("prayer-intention: BOT_TOKEN или CHAT_ID не заданы");
      return json({ ok: false, error: "not_configured" }, 500);
    }

    // Построение сообщения
    const parts = [];
    parts.push("🙏 <b>Нове молитовне намірення</b>");
    parts.push("");
    if (name)    parts.push(`👤 <b>Ім'я:</b> ${esc(name)}`);
    if (forWhom) parts.push(`🕯 <b>За кого:</b> ${esc(forWhom)}`);
    if (contact) parts.push(`📞 <b>Контакт:</b> ${esc(contact)}`);
    parts.push(`🌐 <b>Мова:</b> ${esc(LANG_LABEL[lang] || lang)}`);
    parts.push("");
    parts.push("<b>Намірення:</b>");
    parts.push(esc(intention));
    if (page) {
      parts.push("");
      parts.push(`🔗 <i>Сторінка:</i> ${esc(page)}`);
    }

    const text = parts.join("\n");

    // Отправка в Telegram
    const tgBody = {
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true
    };
    if (thread) {
      tgBody.message_thread_id = Number(thread);
    }

    const tgResp = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tgBody)
      }
    );

    if (!tgResp.ok) {
      const detail = await tgResp.text().catch(() => "");
      console.warn("Telegram API error:", tgResp.status, detail);
      return json({ ok: false, error: "telegram_failed" }, 502);
    }

    return json({ ok: true });
  } catch (err) {
    console.error("prayer-intention exception:", err);
    return json({ ok: false, error: "exception" }, 500);
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400"
    }
  });
}

// ---------- helpers ----------
function sanitize(v, maxLen) {
  if (typeof v !== "string") return "";
  const trimmed = v.trim().slice(0, maxLen);
  return trimmed.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
}

function esc(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
