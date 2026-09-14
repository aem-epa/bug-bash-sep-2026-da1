/**
 * Full-width call-to-action band.
 * Source: one cell with a heading, supporting copy and button links.
 * Add the `newsletter` variant (`<div class="cta-banner newsletter">`) to append a
 * decorative email signup that does not submit anywhere (static demo site).
 * @param {Element} block The cta-banner block element
 */
export default function decorate(block) {
  const content = block.querySelector(':scope > div > div');
  if (content) content.classList.add('cta-banner-content');

  if (block.classList.contains('newsletter') && content) {
    const form = document.createElement('form');
    form.className = 'cta-banner-form';
    form.setAttribute('aria-label', 'Newsletter signup (demo)');
    // Static site: prevent any submission, no data is sent anywhere.
    form.addEventListener('submit', (e) => e.preventDefault());

    const input = document.createElement('input');
    input.type = 'email';
    input.placeholder = 'you@example.com';
    input.setAttribute('aria-label', 'Email address');

    const button = document.createElement('button');
    button.type = 'submit';
    button.className = 'button accent';
    button.textContent = 'Subscribe';

    form.append(input, button);
    content.append(form);
  }
}
