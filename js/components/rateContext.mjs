import { drawSparkline } from './rateSparkline.mjs';
import { qs } from '../utils.mjs';

export function renderRateContext(el, rates) {
  const latest = rates[rates.length - 1].value;
  const avg =
    rates.reduce((sum, r) => sum + r.value, 0) / (rates.length || 1);
  el.innerHTML = `
    <h3>Mortgage Rate Trend</h3>
    <div id="sparkline"></div>
    <div>Current: ${latest.toFixed(2)}% | 12-mo Avg: ${avg.toFixed(2)}%</div>
  `;
  drawSparkline(qs('#sparkline', el), rates);
}
