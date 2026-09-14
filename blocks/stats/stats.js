/**
 * Big-number impact stats.
 * Source: one row per stat with a value cell and a label cell.
 * @param {Element} block The stats block element
 */
export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('stat');
    const cells = [...row.children];
    if (cells[0]) cells[0].classList.add('stat-value');
    if (cells[1]) cells[1].classList.add('stat-label');
  });
}
