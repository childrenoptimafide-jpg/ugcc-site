/**
 * ПАТЧ-СКРИПТ: вставляет карточку «Молитвенное намерение» в index.html
 *
 * Запуск: node apply-prayer-patch.js
 * (Запускать один раз, потом можно удалить этот файл)
 */

const fs   = require('fs');
const path = require('path');

const HTML_FILE = path.join(__dirname, 'index.html');

if (!fs.existsSync(HTML_FILE)) {
  console.error('❌ index.html не найден в:', __dirname);
  process.exit(1);
}

let html = fs.readFileSync(HTML_FILE, 'utf8');
let changed = false;

// ── 1. Подключаем CSS ──────────────────────────────────────────
const cssLink = '<link rel="stylesheet" href="prayer-intention.css" />';
if (!html.includes('prayer-intention.css')) {
  // Вставляем перед </head>
  html = html.replace('</head>', `  ${cssLink}\n</head>`);
  console.log('✅ Добавлен: prayer-intention.css');
  changed = true;
} else {
  console.log('⏭  prayer-intention.css уже подключён');
}

// ── 2. Подключаем JS ──────────────────────────────────────────
const jsScript = '<script src="prayer-intention.js"></script>';
if (!html.includes('prayer-intention.js')) {
  // Вставляем перед </body>
  html = html.replace('</body>', `  ${jsScript}\n</body>`);
  console.log('✅ Добавлен: prayer-intention.js');
  changed = true;
} else {
  console.log('⏭  prayer-intention.js уже подключён');
}

// ── 3. Удаляем старый functionsprayer-intention.js если есть ──
if (html.includes('functionsprayer-intention.js')) {
  html = html.replace(/<script[^>]*functionsprayer-intention\.js[^>]*><\/script>\n?/g, '');
  console.log('✅ Удалена ссылка на старый functionsprayer-intention.js');
  changed = true;
}

// ── 4. Добавляем «Планер» в навигацию (если ещё нет) ─────────
if (!html.includes('prayer-intention-section') && html.includes('id="donate"')) {
  // Вставляем пункт меню
  if (html.includes('data-key="navDonate"') && !html.includes('navPrayer')) {
    html = html.replace(
      /(<a href="#donate"[^>]*data-key="navDonate"[^>]*>)/,
      `<a href="#prayer-intention-section" onclick="closeNav()">Намерение</a>\n        $1`
    );
    console.log('✅ Добавлен пункт меню «Намерение»');
    changed = true;
  }
}

if (changed) {
  // Бэкап
  fs.writeFileSync(HTML_FILE + '.backup', fs.readFileSync(HTML_FILE));
  fs.writeFileSync(HTML_FILE, html, 'utf8');
  console.log('\n✅ index.html обновлён. Бэкап: index.html.backup');
} else {
  console.log('\nℹ️  Изменений не потребовалось — всё уже на месте.');
}
