import { storage } from './utils.mjs';

const defaultState = {
  scenarios: storage.get('scenarios') || [],
  quiz: {},
  investor: storage.get('investor') || false,
};

export const state = defaultState;

export const saveScenario = scenario => {
  state.scenarios.push(scenario);
  storage.set('scenarios', state.scenarios);
};

export const setInvestor = val => {
  state.investor = val;
  storage.set('investor', val);
};

