/**
 * Numbered steps (brewing guide, sourcing journey, etc.).
 * Source: one row per step with a single body cell (heading + copy). Each step is
 * auto-numbered in order.
 * @param {Element} block The steps block element
 */
export default function decorate(block) {
  [...block.children].forEach((row, i) => {
    row.classList.add('step');
    const number = document.createElement('div');
    number.className = 'step-number';
    number.textContent = i + 1;
    [...row.children].forEach((cell) => cell.classList.add('step-body'));
    row.prepend(number);
  });
}
