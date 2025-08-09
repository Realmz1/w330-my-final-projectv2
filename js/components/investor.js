import { qs } from '../utils.js';
import { setInvestor } from '../state.js';

export function renderInvestorToggle(el, state, onToggle) {
  const id = 'investorToggle';
  el.innerHTML = `<label class="toggle"><input type="checkbox" id="${id}" /> Investor Mode</label>`;
  const box = qs(`#${id}`, el);
  box.checked = state.investor || false;
  box.addEventListener('change', e => {
    setInvestor(e.target.checked);
    onToggle?.(e.target.checked);
  });
}
