export function calcMonthlyPayment(principal, annualRate, years = 30) {
  const r = annualRate / 12 / 100;
  const n = years * 12;
  if (r === 0) return principal / n;
  return principal * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
}

export function estimate(price, downPayment, rate, taxRate = 1, insRate = 0.5, hoa = 0) {
  const loan = price - downPayment;
  const pi = calcMonthlyPayment(loan, rate);
  const taxes = (price * taxRate / 100) / 12;
  const ins = (price * insRate / 100) / 12;
  return {
    pi: Number(pi.toFixed(2)),
    taxes: Number(taxes.toFixed(2)),
    insurance: Number(ins.toFixed(2)),
    hoa: Number(hoa),
    piti: Number((pi + taxes + ins + hoa).toFixed(2))
  };
}

export function calcDSCR(rent, piti) {
  return Number((rent / piti).toFixed(2));
}
