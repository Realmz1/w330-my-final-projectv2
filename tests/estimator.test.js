import assert from 'node:assert/strict';
import { test } from 'node:test';
import { calcMonthlyPayment, calcDSCR } from '../js/components/estimator.mjs';

test('calcMonthlyPayment computes correct payment', () => {
  const payment = calcMonthlyPayment(300000, 6, 30);
  // expected approx 1798.65
  assert.ok(Math.abs(payment - 1798.65) < 1);
});

test('calcDSCR returns rent to payment ratio', () => {
  const ratio = calcDSCR(2500, 1800);
  assert.equal(ratio, Number((2500/1800).toFixed(2)));
});
