const ACCENTS = [
  '#4c9a2a', // green
  '#8a6d3b', // black
  '#b9a44a', // white / gold
  '#c07a2c', // oolong
  '#6fae8e', // herbal
  '#7a9e3a', // matcha
  '#8a4a6a', // pu-erh / dark
];

/**
 * Tea variety showcase cards.
 * Source: one row per variety with a main cell (name + description) and a meta cell
 * (a `<ul>` of `**Label** value` items). Each card gets a color accent by position.
 * @param {Element} block The tea-varieties block element
 */
export default function decorate(block) {
  [...block.children].forEach((row, i) => {
    row.classList.add('tea-variety');
    row.style.setProperty('--variety-accent', ACCENTS[i % ACCENTS.length]);
    [...row.children].forEach((cell, j) => {
      cell.classList.add(j === 0 ? 'tea-variety-main' : 'tea-variety-meta');
    });
  });
}
