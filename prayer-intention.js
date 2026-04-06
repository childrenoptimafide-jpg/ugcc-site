/**
 * КАРТОЧКА «МОЛИТВЕННОЕ НАМЕРЕНИЕ»
 * Приход Успения Пресвятой Богородицы · Кишинёв
 *
 * Этот файл:
 * 1. Рендерит карточку «Молитвенное намерение»
 * 2. Управляет модальной формой и отправкой данных
 * 3. Не содержит токенов — всё через /prayer-intention
 */

(function () {
  'use strict';

  const ENDPOINT = '/prayer-intention';

  const TEXTS = {
    ru: {
      cardIcon: '🙏',
      cardTitle: 'Молитвенное намерение',
      cardText: 'Вы можете подать своё молитвенное намерение. Мы будем молиться вместе с вами.',
      cardBtn: 'Отправить намерение',
      modalEyebrow: 'Молитва приходской общины',
      modalTitle: 'Молитвенное намерение',
      closeLabel: 'Закрыть',
      labelName: 'Имя',
      labelCat: 'Категория',
      labelText: 'Текст намерения',
      labelContact: 'Email или телефон',
      placeholderName: 'Ваше имя (необязательно)',
      placeholderContact: 'Необязательно',
      placeholderText: 'Напишите своё намерение...',
      errorEmpty: 'Пожалуйста, напишите текст намерения.',
      btnSend: 'Отправить',
      btnSending: 'Отправляем…',
      successMsg: 'Ваше молитвенное намерение принято. Мы молимся вместе с вами. Спасибо.',
      errorGeneral: 'Не удалось отправить. Пожалуйста, попробуйте ещё раз.',
      categories: [
        'За здравие',
        'За упокой',
        'Благодарение',
        'Особое намерение'
      ]
    },
    uk: {
      cardIcon: '🙏',
      cardTitle: 'Молитовне намірення',
      cardText: 'Ви можете подати своє молитовне намірення. Ми будемо молитися разом з вами.',
      cardBtn: 'Надіслати намірення',
      modalEyebrow: 'Молитва парафіяльної спільноти',
      modalTitle: 'Молитовне намірення',
      closeLabel: 'Закрити',
      labelName: "Ім'я",
      labelCat: 'Категорія',
      labelText: 'Текст намірення',
      labelContact: 'Email або телефон',
      placeholderName: "Ваше ім'я (необов’язково)",
      placeholderContact: 'Необов’язково',
      placeholderText: 'Напишіть своє намірення...',
      errorEmpty: 'Будь ласка, напишіть текст намірення.',
      btnSend: 'Надіслати',
      btnSending: 'Надсилаємо…',
      successMsg: 'Ваше молитовне намірення прийнято. Ми молимося разом з вами. Дякуємо.',
      errorGeneral: 'Не вдалося надіслати. Будь ласка, спробуйте ще раз.',
      categories: [
        'За здоров’я',
        'За упокій',
        'Подяка',
        'Особливе намірення'
      ]
    },
    en: {
      cardIcon: '🙏',
      cardTitle: 'Prayer Intention',
      cardText: 'You may submit your prayer intention. We will pray together with you.',
      cardBtn: 'Send intention',
      modalEyebrow: 'Prayer of the parish community',
      modalTitle: 'Prayer Intention',
      closeLabel: 'Close',
      labelName: 'Name',
      labelCat: 'Category',
      labelText: 'Intention text',
      labelContact: 'Email or phone',
      placeholderName: 'Your name (optional)',
      placeholderContact: 'Optional',
      placeholderText: 'Write your intention...',
      errorEmpty: 'Please enter the intention text.',
      btnSend: 'Send',
      btnSending: 'Sending…',
      successMsg: 'Your prayer intention has been received. We are praying with you. Thank you.',
      errorGeneral: 'Could not send. Please try again.',
      categories: [
        'For health',
        'For the departed',
        'Thanksgiving',
        'Special intention'
      ]
    }
  };

  function getCurrentLang() {
    const htmlLang = (document.documentElement.lang || '').toLowerCase();
    if (htmlLang === 'uk' || htmlLang === 'ua') return 'uk';
    if (htmlLang === 'en') return 'en';
    return 'ru';
  }

  function getTexts() {
    return TEXTS[getCurrentLang()] || TEXTS.ru;
  }

  function buildCard() {
    const T = getTexts();

    const section = document.createElement('section');
    section.id = 'prayer-intention-section';
    section.className = 'section';
    section.setAttribute('aria-labelledby', 'pi-heading');
    section.setAttribute('style', 'scroll-margin-top: 128px;');

    section.innerHTML = `
      <div class="container">
        <div class="pi-card" role="region" aria-label="${escapeHtml(T.cardTitle)}">
          <span class="pi-card-icon" aria-hidden="true">${T.cardIcon}</span>
          <h2 id="pi-heading" class="pi-card-title">${escapeHtml(T.cardTitle)}</h2>
          <p class="pi-card-text">${escapeHtml(T.cardText)}</p>
          <button class="pi-card-btn" id="piOpenBtn" type="button" aria-haspopup="dialog">
            <span>✦</span>
            ${escapeHtml(T.cardBtn)}
          </button>
        </div>
      </div>
    `;

    return section;
  }

  function buildCategoryOptions(categories) {
    return categories
      .map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`)
      .join('');
  }

  function buildModal() {
    const T = getTexts();

    const overlay = document.createElement('div');
    overlay.id = 'piOverlay';
    overlay.className = 'pi-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'piModalTitle');

    overlay.innerHTML = `
      <div class="pi-modal" id="piModal" role="document">
        <div class="pi-modal-header">
          <p class="pi-modal-eyebrow">✦ ${escapeHtml(T.modalEyebrow)}</p>
          <h3 class="pi-modal-title" id="piModalTitle">${escapeHtml(T.modalTitle)}</h3>
          <button class="pi-modal-close" id="piCloseBtn"
                  type="button" aria-label="${escapeHtml(T.closeLabel)}">✕</button>
        </div>

        <div class="pi-modal-body">
          <form class="pi-form" id="piForm" novalidate>
            <div class="pi-field">
              <label class="pi-label" for="piName">${escapeHtml(T.labelName)}</label>
              <input class="pi-input" id="piName" name="name" type="text"
                     placeholder="${escapeHtml(T.placeholderName)}"
                     autocomplete="given-name" maxlength="100" />
            </div>

            <div class="pi-field">
              <label class="pi-label" for="piCategory">${escapeHtml(T.labelCat)}</label>
              <select class="pi-select" id="piCategory" name="category">
                ${buildCategoryOptions(T.categories)}
              </select>
            </div>

            <div class="pi-field">
              <label class="pi-label" for="piIntention">
                ${escapeHtml(T.labelText)}
                <span class="pi-required" aria-label="required">*</span>
              </label>
              <textarea class="pi-textarea" id="piIntention" name="intention"
                        placeholder="${escapeHtml(T.placeholderText)}"
                        rows="4" maxlength="1000" required></textarea>
              <span class="pi-field-error" id="piIntentionError" role="alert">
                ${escapeHtml(T.errorEmpty)}
              </span>
            </div>

            <div class="pi-field">
              <label class="pi-label" for="piContact">${escapeHtml(T.labelContact)}</label>
              <input class="pi-input" id="piContact" name="contact" type="text"
                     placeholder="${escapeHtml(T.placeholderContact)}"
                     autocomplete="email" maxlength="120" />
            </div>

            <div class="pi-message pi-message-success" id="piSuccess" role="status">
              <span class="pi-message-icon">✅</span>
              <span>${escapeHtml(T.successMsg)}</span>
            </div>

            <div class="pi-message pi-message-error" id="piError" role="alert">
              <span class="pi-message-icon">⚠️</span>
              <span id="piErrorText">${escapeHtml(T.errorGeneral)}</span>
            </div>

            <button class="pi-submit-btn" id="piSubmitBtn" type="submit">
              <span class="pi-spinner" aria-hidden="true"></span>
              <span class="pi-btn-label">${escapeHtml(T.btnSend)}</span>
            </button>
          </form>
        </div>
      </div>
    `;

    return overlay;
  }

  function mount() {
    if (document.getElementById('prayer-intention-section')) return;
    if (document.getElementById('piOverlay')) return;

    const anchor = document.getElementById('donate')
      || document.getElementById('contacts')
      || document.querySelector('main')
      || document.body;

    const section = buildCard();
    const modal = buildModal();

    if (anchor.id === 'donate' || anchor.id === 'contacts') {
      anchor.parentNode.insertBefore(section, anchor);
    } else {
      anchor.appendChild(section);
    }

    document.body.appendChild(modal);
  }

  function remountForLanguage() {
    const oldSection = document.getElementById('prayer-intention-section');
    const oldOverlay = document.getElementById('piOverlay');

    if (oldSection) oldSection.remove();
    if (oldOverlay) oldOverlay.remove();

    mount();
    bindEvents();
  }

  function openModal() {
    const overlay = document.getElementById('piOverlay');
    if (!overlay) return;

    restoreFormVisibility();
    hideMessages();

    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      const first = overlay.querySelector('#piName');
      if (first) first.focus();
    }, 60);
  }

  function closeModal() {
    const overlay = document.getElementById('piOverlay');
    if (!overlay) return;
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function setLoading(btn, isLoading) {
    const T = getTexts();
    btn.disabled = isLoading;
    btn.classList.toggle('is-loading', isLoading);

    const label = btn.querySelector('.pi-btn-label');
    if (label) {
      label.textContent = isLoading ? T.btnSending : T.btnSend;
    }
  }

  function showMessage(type) {
    const success = document.getElementById('piSuccess');
    const error = document.getElementById('piError');

    if (success) success.classList.toggle('is-visible', type === 'success');
    if (error) error.classList.toggle('is-visible', type === 'error');
  }

  function hideMessages() {
    const success = document.getElementById('piSuccess');
    const error = document.getElementById('piError');

    if (success) success.classList.remove('is-visible');
    if (error) error.classList.remove('is-visible');
  }

  function setErrorText(msg) {
    const errorText = document.getElementById('piErrorText');
    if (errorText) {
      errorText.textContent = msg || getTexts().errorGeneral;
    }
  }

  function resetFormFields() {
    const form = document.getElementById('piForm');
    const intention = document.getElementById('piIntention');
    const intentionError = document.getElementById('piIntentionError');

    if (form) form.reset();
    if (intention) intention.classList.remove('has-error');
    if (intentionError) intentionError.classList.remove('is-visible');
  }

  function restoreFormVisibility() {
    const form = document.getElementById('piForm');
    if (!form) return;

    form.querySelectorAll('.pi-field, .pi-submit-btn').forEach(el => {
      el.style.display = '';
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const T = getTexts();
    const intentionEl = document.getElementById('piIntention');
    const errorEl = document.getElementById('piIntentionError');
    const submitBtn = document.getElementById('piSubmitBtn');

    if (!intentionEl || !errorEl || !submitBtn) return;

    const intention = intentionEl.value.trim();
    if (!intention) {
      intentionEl.classList.add('has-error');
      errorEl.classList.add('is-visible');
      intentionEl.focus();
      return;
    }

    intentionEl.classList.remove('has-error');
    errorEl.classList.remove('is-visible');

    const name = (document.getElementById('piName')?.value || '').trim();
    const category = document.getElementById('piCategory')?.value || '';
    const contact = (document.getElementById('piContact')?.value || '').trim();

    hideMessages();
    setLoading(submitBtn, true);

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, category, intention, contact })
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        resetFormFields();
        showMessage('success');
      } else {
        setErrorText(data.error || T.errorGeneral);
        showMessage('error');
      }
    } catch (err) {
      setErrorText(T.errorGeneral);
      showMessage('error');
    } finally {
      setLoading(submitBtn, false);
    }
  }

  function bindEvents() {
    document.getElementById('piOpenBtn')?.addEventListener('click', openModal);
    document.getElementById('piCloseBtn')?.addEventListener('click', closeModal);

    document.getElementById('piOverlay')?.addEventListener('click', function (e) {
      if (e.target === this) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      const overlay = document.getElementById('piOverlay');
      if (e.key === 'Escape' && overlay?.classList.contains('is-open')) {
        closeModal();
      }
    });

    document.getElementById('piForm')?.addEventListener('submit', handleSubmit);

    document.getElementById('piIntention')?.addEventListener('input', function () {
      if (this.value.trim()) {
        this.classList.remove('has-error');
        document.getElementById('piIntentionError')?.classList.remove('is-visible');
      }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        setTimeout(remountForLanguage, 30);
      });
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function init() {
    mount();
    bindEvents();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();