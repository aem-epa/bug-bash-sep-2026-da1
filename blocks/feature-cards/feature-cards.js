/**
 * Feature / benefit cards.
 * Source: one row per card. Author two cells — an icon cell
 * (`<span class="icon icon-name">`) and a body cell (heading + copy) — or a single
 * body cell that begins with an icon.
 * @param {Element} block The feature-cards block element
 */
export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('feature-card');
    [...row.children].forEach((cell) => {
      const media = cell.querySelector('.icon, picture, img');
      if (media && cell.textContent.trim() === '') cell.classList.add('feature-card-icon');
      else cell.classList.add('feature-card-body');
    });
  });
}
