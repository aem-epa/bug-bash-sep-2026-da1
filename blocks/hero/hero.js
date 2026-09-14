/**
 * Hero banner.
 * Source: one block cell with an eyebrow (optional <p>), a heading, a subtitle and
 * button links. An optional <picture> anywhere in the block becomes a full-bleed
 * background (switches the hero to its image/overlay variant).
 * @param {Element} block The hero block element
 */
export default function decorate(block) {
  const picture = block.querySelector('picture');

  const content = document.createElement('div');
  content.className = 'hero-content';

  // Move every authored element except the background picture into the content wrapper.
  block.querySelectorAll(':scope > div > div').forEach((cell) => {
    [...cell.children].forEach((el) => {
      const isPicture = el.tagName === 'PICTURE' || (el.querySelector && el.querySelector('picture'));
      if (!isPicture) content.append(el);
    });
  });

  // Tag a leading paragraph that sits directly above the heading as the eyebrow.
  const first = content.firstElementChild;
  if (first && first.tagName === 'P' && first.nextElementSibling
    && /^H[1-3]$/.test(first.nextElementSibling.tagName)) {
    first.classList.add('hero-eyebrow');
  }

  block.textContent = '';

  if (picture) {
    block.classList.add('hero-image');
    const bg = document.createElement('div');
    bg.className = 'hero-bg';
    bg.append(picture);
    block.append(bg);
  }

  block.append(content);
}
