import { storage } from './utils.mjs';

const savedQuiz = storage.get('quiz');
const defaultQuiz =
  savedQuiz || {
    income: 85000,
    rent: 1800,
    savings: 20000,
    credit: '680-740',
    timeframe: '3-6',
    city: 'Denver, CO',
    rentIncome: 2400,
  };

if (!savedQuiz) storage.set('quiz', defaultQuiz);

const defaultState = {
  scenarios: storage.get('scenarios') || [],
  quiz: defaultQuiz,
  investor: storage.get('investor') || false,
};

export const state = defaultState;

export const saveScenario = scenario => {
  state.scenarios.push(scenario);
  storage.set('scenarios', state.scenarios);
};

export const saveQuiz = quiz => {
  state.quiz = quiz;
  storage.set('quiz', quiz);
};

export const setInvestor = val => {
  state.investor = val;
  storage.set('investor', val);
};
