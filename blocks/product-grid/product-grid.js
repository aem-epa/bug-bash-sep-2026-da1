/**
 * Product / accessory grid (static — no cart or checkout logic).
 * Source: one row per product. Author an image cell and a body cell containing a
 * category tag (first paragraph), a name (heading), a tasting note, a price
 * (paragraph starting with a currency amount) and a button link (`**[Add to cart]()**`).
 * Buttons are already decorated by `decorateButtons` before this runs.
 * @param {Element} block The product-grid block element
 */
export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('product-card');

    [...row.children].forEach((cell) => {
      const media = cell.querySelector('picture, img');
      if (media && cell.textContent.trim() === '') cell.classList.add('product-card-media');
      else cell.classList.add('product-card-body');
    });

    const body = row.querySelector('.product-card-body');
    if (!body) return;

    const paragraphs = [...body.querySelectorAll(':scope > p')];
    const priceP = paragraphs.find((p) => /^\s*[$€£]\s?\d/.test(p.textContent));
    if (priceP) priceP.classList.add('product-price');
    const tagP = paragraphs.find((p) => p !== priceP && !p.classList.contains('button-wrapper'));
    if (tagP) tagP.classList.add('product-tag');
  });
}
