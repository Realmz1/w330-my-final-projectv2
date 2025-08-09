export function renderScenarioCard(s, container) {
  const div = document.createElement('div');
  div.className = 'scenario-card';
  div.innerHTML = `
    <strong>${s.city}</strong>
    <div>Price: $${s.price.toLocaleString()}</div>
    <div>Payment: $${s.piti.toLocaleString()}</div>
    ${s.dscr ? `<div>DSCR: ${s.dscr}</div>` : ''}
  `;
  container.appendChild(div);
}
