export function generateActionPlan(quiz) {
  const steps = [];
  if (quiz.savings < 10000) steps.push('Increase reserves for down payment.');
  if (quiz.credit === '<620') steps.push('Work on improving credit score.');
  if (quiz.timeframe === '>6') steps.push('Keep monitoring rates while you prepare.');
  if (!steps.length) steps.push('You look ready to explore homeownership!');
  return steps;
}
