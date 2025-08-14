export function generateActionPlan(quiz) {
  const steps = [];
  const savings = Number(quiz.savings);
  const targetReserves = 20000;

  if (savings < targetReserves) {
    const needed = targetReserves - savings;
    steps.push(
      `Add $${needed.toLocaleString()} to reserves to reach $${targetReserves.toLocaleString()}.`
    );
  }

  // Loan type guidance
  if (quiz.credit === '<620' || quiz.credit === '620-680') {
    steps.push('Target FHA financing for flexible credit and low down payment.');
  } else {
    steps.push('You qualify for conventional loans; compare lenders for best terms.');
  }

  // Credit tips
  if (quiz.credit === '<620') {
    steps.push('Review reports, pay down balances, and avoid new debt to boost credit.');
  } else if (quiz.credit === '620-680') {
    steps.push('Aim for a 680+ score to access more loan programs.');
  } else if (quiz.credit === '680-740') {
    steps.push('Keep credit utilization low to push into the 740+ tier.');
  } else {
    steps.push('Maintain strong credit by paying balances in full each month.');
  }

  // Timeline suggestions
  if (quiz.timeframe === '0-3') {
    steps.push('Gather documents and pursue pre-approval soon.');
  } else if (quiz.timeframe === '3-6') {
    steps.push('Use the next few months to save and monitor rates.');
  } else {
    steps.push('Take your time to build savings and watch market trends.');
  }

  // Investor / house-hack ideas
  if (quiz.rentIncome) {
    steps.push('Explore house-hack strategies to offset payments with rental income.');
  }

  return steps;
}
