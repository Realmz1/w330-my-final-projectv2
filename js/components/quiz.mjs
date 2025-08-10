import { qs, getFormData } from '../utils.mjs';

export function renderQuiz(el, onSubmit, investor = false) {
  el.innerHTML = `
    <section class="card">
      <h1>Get Your Buying Power</h1>
      <form id="quiz">
        <label>Annual Income
          <input type="number" name="income" required min="0" />
        </label>
        <label>Current Rent (monthly)
          <input type="number" name="rent" required min="0" />
        </label>
        <label>Savings for Down Payment
          <input type="number" name="savings" required min="0" />
        </label>
        ${investor ? `<label>Expected Monthly Rent
          <input type="number" name="rentIncome" required min="0" />
        </label>` : ''}
        <label>Credit Score Band
          <select name="credit" required>
            <option value="<620"><620</option>
            <option value="620-680">620-680</option>
            <option value="680-740">680-740</option>
            <option value=">740">740+</option>
          </select>
        </label>
        <label>Buying Timeframe
          <select name="timeframe" required>
            <option value="0-3">0-3 months</option>
            <option value="3-6">3-6 months</option>
            <option value=">6">6+ months</option>
          </select>
        </label>
        <label>Target City or ZIP
          <input type="text" name="city" required />
        </label>
        <button type="submit">See Estimate</button>
      </form>
    </section>`;
  const form = qs('#quiz', el);
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = getFormData(form);
    onSubmit(data);
  });
}
