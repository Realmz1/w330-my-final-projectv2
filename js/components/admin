import { qs } from '../utils.mjs';

export function renderAdmin(el, scenarios) {
  el.innerHTML = `
    <h1>Saved Scenarios</h1>
    <table id="adminTable">
      <thead>
        <tr><th>City</th><th>Price</th><th>PITI</th><th>DSCR</th></tr>
      </thead>
      <tbody></tbody>
    </table>
    <button id="export">Export CSV</button>
    <section class="card">
      <h1>Saved Scenarios</h1>
      <table id="adminTable">
        <thead>
          <tr><th>City</th><th>Price</th><th>PITI</th><th>DSCR</th></tr>
        </thead>
        <tbody></tbody>
      </table>
      <button id="export">Export CSV</button>
    </section>
  `;
  const tbody = qs('#adminTable tbody', el);
  scenarios.forEach(s => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${s.city}</td><td>${s.price}</td><td>${s.piti}</td><td>${s.dscr ?? ''}</td>`;
    tbody.appendChild(row);
  });
  qs('#export', el).addEventListener('click', () => {
    const header = 'city,price,piti,dscr';
    const rows = scenarios.map(s => `${s.city},${s.price},${s.piti},${s.dscr ?? ''}`);
    const csv = [header, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'scenarios.csv';
    a.click();
  });
}
