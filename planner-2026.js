/**
 * ПЛАНЕР ЦЕРКОВНИХ ПОДІЙ 2026
 * Приход Успения Пресвятой Богородицы · Кишинёв
 * Логика: навигация по месяцам, карточки, модальное окно, фильтр, легенда
 */

(function () {
  'use strict';

  // ── Текущий язык (синхронизируется с lang-switcher сайта) ──
  let currentLang = 'ru';
  let activeMonth = new Date().getMonth() + 1; // текущий месяц (1-12)
  if (activeMonth < 1 || activeMonth > 12) activeMonth = 1;
  let activeFilter = null; // категория-фильтр (null = все)

  // ── Получаем текст по языку ──────────────────────────────
  function t(obj, lang) {
    if (!obj) return '';
    return obj[lang] || obj['ru'] || obj['uk'] || '';
  }

  // ── Определяем язык сайта ────────────────────────────────
  function detectLang() {
    const btn = document.querySelector('#langBtnUA.active');
    const btnEN = document.querySelector('#langBtnEN.active');
    if (btn) return 'uk';
    if (btnEN) return 'en';
    return 'ru';
  }

  // ── Форматирование даты ──────────────────────────────────
  function formatDate(iso) {
    if (!iso) return null;
    const d = new Date(iso);
    const months = {
      ru: ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'],
      uk: ['січня','лютого','березня','квітня','травня','червня','липня','серпня','вересня','жовтня','листопада','грудня']
    };
    const m = months[currentLang] || months.ru;
    return `${d.getDate()} ${m[d.getMonth()]} ${d.getFullYear()}`;
  }

  // ── Является ли дата сегодняшней ─────────────────────────
  function isToday(iso) {
    if (!iso) return false;
    const today = new Date();
    const d = new Date(iso);
    return d.getFullYear() === today.getFullYear() &&
           d.getMonth()    === today.getMonth()    &&
           d.getDate()     === today.getDate();
  }

  // ── Строим навигацию по месяцам ──────────────────────────
  function buildMonthNav() {
    const nav = document.getElementById('calMonthNav');
    if (!nav) return;
    nav.innerHTML = '';
    const names = MONTH_NAMES[currentLang] || MONTH_NAMES.ru;
    names.forEach((name, idx) => {
      const btn = document.createElement('button');
      btn.className = 'cal-month-btn' + (idx + 1 === activeMonth ? ' active' : '');
      btn.textContent = name;
      btn.dataset.month = idx + 1;
      btn.addEventListener('click', () => {
        activeMonth = idx + 1;
        activeFilter = null;
        renderAll();
      });
      nav.appendChild(btn);
    });
  }

  // ── Получаем события месяца ──────────────────────────────
  function getMonthEvents(month) {
    return PLANNER_EVENTS_2026.filter(e => e.month === month);
  }

  // ── Получаем регулярные события (без конкретного месяца) ─
  function getRecurringEvents() {
    return PLANNER_EVENTS_2026.filter(e => e.month === null);
  }

  // ── Блок главных событий месяца ──────────────────────────
  function buildHighlights(events) {
    const box = document.getElementById('calHighlights');
    if (!box) return;
    const highlights = events.filter(e => e.highlight);
    if (!highlights.length) {
      box.style.display = 'none';
      return;
    }
    box.style.display = '';
    const names = MONTH_NAMES[currentLang] || MONTH_NAMES.ru;

    const labelTexts = {
      ru: 'Главные события месяца',
      uk: 'Головні події місяця'
    };
    const monthLabel = names[activeMonth - 1];

    box.innerHTML = `
      <div class="cal-highlights-label">${monthLabel} 2026</div>
      <h3>${labelTexts[currentLang] || labelTexts.ru}</h3>
      <ul class="cal-highlights-list">
        ${highlights.slice(0, 5).map(e => `
          <li data-event-id="${e.id}">
            <span class="hl-date">${e.date}</span>
            <span class="hl-title">${t(e.title, currentLang)}</span>
          </li>
        `).join('')}
      </ul>
    `;

    box.querySelectorAll('li[data-event-id]').forEach(li => {
      li.addEventListener('click', () => {
        const ev = PLANNER_EVENTS_2026.find(e => e.id === +li.dataset.eventId);
        if (ev) openModal(ev);
      });
    });
  }

  // ── Строим легенду категорий ─────────────────────────────
  function buildLegend(events) {
    const legend = document.getElementById('calLegend');
    if (!legend) return;
    const cats = [...new Set(events.map(e => e.category))];
    legend.innerHTML = cats.map(cat => {
      const c = EVENT_CATEGORIES[cat];
      if (!c) return '';
      return `
        <button class="cal-legend-item${activeFilter === cat ? ' active' : ''}"
                data-cat="${cat}"
                style="--leg-color:${c.color}">
          <span class="cal-legend-dot" style="background:${c.color}"></span>
          ${t(c.label, currentLang)}
        </button>
      `;
    }).join('');

    legend.querySelectorAll('.cal-legend-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.dataset.cat;
        activeFilter = (activeFilter === cat) ? null : cat;
        renderAll();
      });
    });
  }

  // ── Карточка события ─────────────────────────────────────
  function buildEventCard(ev) {
    const cat = EVENT_CATEGORIES[ev.category] || EVENT_CATEGORIES.community;
    const title = t(ev.title, currentLang);
    const isHighlight = ev.highlight;
    const isRecurring = ev.type === 'recurring';

    const classes = [
      'cal-event-card',
      isHighlight ? 'is-highlight' : '',
      isRecurring ? 'is-recurring' : ''
    ].filter(Boolean).join(' ');

    const todayMark = ev.dateISO && isToday(ev.dateISO)
      ? '<span style="display:inline-block;background:var(--gold);color:#fff;font-size:0.68rem;padding:1px 7px;border-radius:8px;margin-left:6px;">Сегодня</span>'
      : '';

    const card = document.createElement('article');
    card.className = classes;
    card.dataset.eventId = ev.id;
    card.dataset.cat = ev.category;
    card.style.setProperty('--cat-color', cat.color);

    card.innerHTML = `
      <div class="cal-event-head">
        <span class="cal-event-date">${ev.date}${todayMark}</span>
        ${isHighlight ? '<span class="cal-star" aria-label="Главное событие">✦</span>' : ''}
      </div>
      <div class="cal-event-cat-badge"
           style="background:${cat.bg};color:${cat.color}">
        ${t(cat.label, currentLang)}
      </div>
      <h4 class="cal-event-title${isHighlight ? ' is-highlight' : ''}">${title}</h4>
      <div class="cal-event-meta">
        ${ev.time ? `<span>🕐 ${ev.time}</span>` : ''}
        ${ev.responsible ? `<span>👤 ${t(ev.responsible, currentLang)}</span>` : ''}
      </div>
      ${isRecurring ? `<span class="cal-event-recurring-badge">🔄 ${ev.date}</span>` : ''}
      <span class="cal-event-more">Подробнее →</span>
    `;

    card.addEventListener('click', () => openModal(ev));
    return card;
  }

  // ── Строим сетку событий ─────────────────────────────────
  function buildEventsGrid(events) {
    const grid = document.getElementById('calEventsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = activeFilter
      ? events.filter(e => e.category === activeFilter)
      : events;

    if (!filtered.length) {
      grid.innerHTML = '<div class="cal-empty">В этом месяце событий нет</div>';
      return;
    }

    // Сортировка: сначала датированные, потом периоды, потом регулярные
    const sorted = [...filtered].sort((a, b) => {
      if (a.dateISO && b.dateISO) return a.dateISO.localeCompare(b.dateISO);
      if (a.dateISO) return -1;
      if (b.dateISO) return 1;
      return 0;
    });

    // Сначала главные (highlight)
    const mainEvents = sorted.filter(e => e.highlight);
    const otherEvents = sorted.filter(e => !e.highlight);

    [...mainEvents, ...otherEvents].forEach(ev => {
      grid.appendChild(buildEventCard(ev));
    });
  }

  // ── Секция регулярных событий ─────────────────────────────
  function buildRecurringSection() {
    const section = document.getElementById('calRecurringSection');
    if (!section) return;
    const recurring = getRecurringEvents();
    if (!recurring.length) { section.style.display = 'none'; return; }
    section.style.display = '';

    const titleTexts = { ru: 'Регулярные события', uk: 'Регулярні події' };

    section.innerHTML = `
      <h3 class="cal-recurring-title">${titleTexts[currentLang] || titleTexts.ru}</h3>
      <div class="cal-recurring-grid">
        ${recurring.map(ev => {
          const cat = EVENT_CATEGORIES[ev.category] || EVENT_CATEGORIES.community;
          return `
            <div class="cal-rec-item" data-event-id="${ev.id}" role="button" tabindex="0">
              <span class="cal-rec-dot" style="background:${cat.color}"></span>
              <div class="cal-rec-text">
                <strong>${t(ev.title, currentLang)}</strong>
                <small>${ev.date}${ev.time ? ' · ' + ev.time : ''}</small>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    section.querySelectorAll('.cal-rec-item').forEach(item => {
      const handler = () => {
        const ev = PLANNER_EVENTS_2026.find(e => e.id === +item.dataset.eventId);
        if (ev) openModal(ev);
      };
      item.addEventListener('click', handler);
      item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') handler(); });
    });
  }

  // ── Модальное окно ───────────────────────────────────────
  function openModal(ev) {
    const overlay = document.getElementById('calModalOverlay');
    if (!overlay) return;

    const cat = EVENT_CATEGORIES[ev.category] || EVENT_CATEGORIES.community;
    const modal = overlay.querySelector('.cal-modal');

    const labels = {
      ru: { date: 'Дата', time: 'Время', goal: 'Цель', responsible: 'Ответственные', note: 'Примечание', recurring: 'Периодичность', highlight: '✦ Главное событие года' },
      uk: { date: 'Дата', time: 'Час', goal: 'Мета', responsible: 'Відповідальні', note: 'Примітка', recurring: 'Регулярність', highlight: '✦ Головна подія року' }
    };
    const L = labels[currentLang] || labels.ru;

    const rows = [];
    rows.push({ label: L.date, value: ev.dateEndISO ? `${ev.date}` : ev.date, main: true });
    if (ev.time) rows.push({ label: L.time, value: ev.time });
    if (ev.goal) rows.push({ label: L.goal, value: t(ev.goal, currentLang) });
    if (ev.responsible) rows.push({ label: L.responsible, value: t(ev.responsible, currentLang) });
    if (ev.type === 'recurring') rows.push({ label: L.recurring, value: ev.date });
    if (ev.note) rows.push({ label: L.note, value: t(ev.note, currentLang), note: true });

    modal.style.setProperty('--modal-cat-color', cat.color);
    modal.style.setProperty('--modal-cat-bg', cat.bg);

    modal.querySelector('.cal-modal-cat').innerHTML =
      `<span style="width:10px;height:10px;border-radius:50%;background:${cat.color};display:inline-block"></span>
       ${t(cat.label, currentLang)}`;

    modal.querySelector('.cal-modal-title').textContent = t(ev.title, currentLang);

    const body = modal.querySelector('.cal-modal-rows');
    body.innerHTML = rows.map(r => `
      <div class="cal-modal-row">
        <span class="cal-modal-label">${r.label}</span>
        <span class="cal-modal-value${r.main ? ' is-main' : ''}">${r.value}</span>
      </div>
    `).join('');

    if (ev.highlight) {
      body.insertAdjacentHTML('beforeend', `
        <div class="cal-modal-highlight-note">${L.highlight}</div>
      `);
    }

    overlay.classList.add('is-open');
    modal.querySelector('.cal-modal-close').focus();
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    const overlay = document.getElementById('calModalOverlay');
    if (!overlay) return;
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // ── Главный рендер ───────────────────────────────────────
  function renderAll() {
    currentLang = detectLang();
    const monthEvents = getMonthEvents(activeMonth);

    buildMonthNav();
    buildHighlights(monthEvents);
    buildLegend(monthEvents);
    buildEventsGrid(monthEvents);
    buildRecurringSection();

    // Обновляем заголовок месяца
    const titleEl = document.getElementById('calMonthTitle');
    const subtitleEl = document.getElementById('calMonthSubtitle');
    if (titleEl) {
      const names = MONTH_NAMES[currentLang] || MONTH_NAMES.ru;
      titleEl.textContent = names[activeMonth - 1] + ' 2026';
    }
    if (subtitleEl) {
      const subMap = {
        ru: 'Пастырская программа прихода',
        uk: 'Пастирська програма парафії'
      };
      subtitleEl.textContent = subMap[currentLang] || subMap.ru;
    }
  }

  // ── Инициализация ────────────────────────────────────────
  function init() {
    // Если планер не в DOM — выходим
    if (!document.getElementById('calendar-2026')) return;

    // Автоопределение текущего месяца 2026
    const now = new Date();
    if (now.getFullYear() === 2026) {
      activeMonth = now.getMonth() + 1;
    } else if (now.getFullYear() < 2026) {
      activeMonth = 1;
    } else {
      activeMonth = 12;
    }

    currentLang = detectLang();
    renderAll();

    // Закрытие модального окна
    const overlay = document.getElementById('calModalOverlay');
    if (overlay) {
      overlay.querySelector('.cal-modal-close').addEventListener('click', closeModal);
      overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
    }

    // Синхронизация с переключателем языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        setTimeout(renderAll, 50);
      });
    });
  }

  // Запускаем после загрузки DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
