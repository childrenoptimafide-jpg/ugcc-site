/* Shared by the existing prayer cards and the full Liturgy reader. */
let prayerFontSizes = { morning: 1, evening: 1, liturgy: 1 };
function changeFontSize(cardId, step) {
  const textContainer = document.getElementById(`text-${cardId}`);
  if (!textContainer) return;
  const oldSize = prayerFontSizes[cardId] || 1;
  const nextSize = Math.round(Math.max(0.8, Math.min(1.8, oldSize + step * 0.1)) * 10) / 10;
  prayerFontSizes[cardId] = nextSize;
  const baseSize = Number(textContainer.dataset.fontBase) || 1;
  textContainer.style.fontSize = (nextSize * baseSize) + 'rem';
  textContainer.dispatchEvent(new CustomEvent('prayerfontsizechange', { detail: { scale: nextSize } }));
}
