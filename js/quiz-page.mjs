import { renderQuiz } from './components/quiz.mjs';
import { estimate, calcDSCR } from './components/estimator.mjs';
import { getMortgageRates } from './api/fred.mjs';
import { drawSparkline } from './components/rateSparkline.mjs';
import { getStaticMap } from './api/mapbox.mjs';
import { generateActionPlan } from './components/actionPlan.mjs';
import { renderScenarioCard } from './components/scenarioCard.mjs';
import { renderInvestorToggle } from './components/investor.mjs';
import { state, saveScenario, saveQuiz } from './state.mjs';
import { qs } from './utils.mjs';

const app = document.getElementById('app');

function showSaved(container) {
  container.innerHTML = '';
  state.scenarios.forEach(s => renderScenarioCard(s, container));
}

async function handleQuizSubmit(quiz) {
  saveQuiz(quiz);
  const savings = Number(quiz.savings);
  const rateData = await getMortgageRates();
  const latestRate = rateData[rateData.length - 1].value;
  const price = savings / 0.05; // assumes 5% down
  const est = estimate(price, savings, latestRate);
  const mapUrl = await getStaticMap(quiz.city, window.MAPBOX_TOKEN || null);
  const plan = generateActionPlan(quiz);
  const dscr = state.investor && quiz.rentIncome ? calcDSCR(Number(quiz.rentIncome), est.piti) : null;
  app.innerHTML = `
    <section id="est-result" class="card">
      <h2>Estimated Buying Power</h2>
      <div>Price: $${Math.round(price).toLocaleString()}</div>
      <div>Monthly PITI: $${est.piti.toLocaleString()}</div>
      ${dscr ? `<div>DSCR: ${dscr}</div>` : ''}
      <div id="sparkline"></div>
      <div id="rate">Current Rate: ${latestRate.toFixed(2)}%</div>
      <div id="map"></div>
      <button id="saveScenario">Save Scenario</button>
      <ul id="plan">${plan.map(p => `<li>${p}</li>`).join('')}</ul>
      <h3>Saved Scenarios</h3>
      <div id="saved"></div>
    </section>`;
  drawSparkline(qs('#sparkline'), rateData);
  if (mapUrl) qs('#map').innerHTML = `<img src="${mapUrl}" alt="map of ${quiz.city}" />`;
  qs('#saveScenario').addEventListener('click', () => {
    const scenario = { city: quiz.city, price: Math.round(price), piti: est.piti };
    if (dscr) scenario.dscr = dscr;
    saveScenario(scenario);
    showSaved(qs('#saved'));
  });
  showSaved(qs('#saved'));
}

function init() {
  const toggleContainer = document.createElement('div');
  toggleContainer.className = 'card';
  document.body.prepend(toggleContainer);
  renderInvestorToggle(toggleContainer, state, () => renderQuiz(app, handleQuizSubmit, state.investor, state.quiz));
  renderQuiz(app, handleQuizSubmit, state.investor, state.quiz);
}

init();
