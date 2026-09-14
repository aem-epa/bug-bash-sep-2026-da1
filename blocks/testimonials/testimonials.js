/**
 * Customer testimonial cards.
 * Source: one row per testimonial with a single cell containing the quote
 * paragraph(s) and a final paragraph for the author (use `**Name**, role`).
 * @param {Element} block The testimonials block element
 */
export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('testimonial');
    const cell = row.querySelector(':scope > div');
    if (!cell) return;
    cell.classList.add('testimonial-body');
    const paragraphs = [...cell.querySelectorAll(':scope > p')];
    if (paragraphs.length) {
      paragraphs[paragraphs.length - 1].classList.add('testimonial-author');
    }
  });
}
