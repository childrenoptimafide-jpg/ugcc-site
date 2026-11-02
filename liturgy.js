(() => {
  const labels = {
    ua: { back: '← До молитов', more: 'Збільшити шрифт', less: 'Зменшити шрифт' },
    en: { back: '← Back to prayers', more: 'Increase text size', less: 'Decrease text size' },
    ru: { back: '← К молитвам', more: 'Увеличить шрифт', less: 'Уменьшить шрифт' }
  };
  const requested = new URLSearchParams(location.search).get('ui');
  const ui = Object.hasOwn(labels, requested) ? requested : 'ua';
  const text = document.getElementById('text-liturgy');
  const more = document.getElementById('font-more');
  const less = document.getElementById('font-less');
  const value = document.getElementById('font-value');
  const narrow = window.matchMedia('(max-width: 600px)');
  document.querySelectorAll('[data-reader-label="back"]').forEach(link => {
    link.textContent = labels[ui].back;
    link.lang = ui === 'ua' ? 'uk' : ui;
    link.href = './?lang=' + ui + '#prayer-cards';
  });
  more.setAttribute('aria-label', labels[ui].more);
  less.setAttribute('aria-label', labels[ui].less);
  function showSize() {
    const scale = prayerFontSizes.liturgy;
    value.value = Math.round(scale * 100) + '%';
    more.disabled = scale >= 1.8;
    less.disabled = scale <= 0.8;
  }
  function applySize() {
    text.dataset.fontBase = narrow.matches ? '1.25' : '1.375';
    changeFontSize('liturgy', 0);
  }
  try {
    const saved = Number(localStorage.getItem('ugcc-liturgy-font-scale'));
    if (saved >= .8 && saved <= 1.8) prayerFontSizes.liturgy = Math.round(saved * 10) / 10;
  } catch (_) { /* Reading still works when browser storage is disabled. */ }
  text.addEventListener('prayerfontsizechange', () => {
    showSize();
    try { localStorage.setItem('ugcc-liturgy-font-scale', String(prayerFontSizes.liturgy)); } catch (_) {}
  });
  function resize(step) {
    // Keep the paragraph currently being read at the same place on the screen.
    const anchor = Array.from(text.querySelectorAll('[data-doc-p]')).find(p => p.getBoundingClientRect().bottom > 90);
    const before = anchor?.getBoundingClientRect().top;
    changeFontSize('liturgy', step);
    if (anchor) window.scrollBy(0, anchor.getBoundingClientRect().top - before);
  }
  more.addEventListener('click', () => resize(1));
  less.addEventListener('click', () => resize(-1));
  narrow.addEventListener('change', applySize);
  applySize();
})();
