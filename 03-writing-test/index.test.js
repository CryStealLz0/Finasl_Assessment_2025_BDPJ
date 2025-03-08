import test from 'node:test';
import { strictEqual } from 'node:assert';
import { sum } from './index.js';

test('sum should return the correct sum of two numbers', () => {
  strictEqual(sum(2, 3), 5); // 2 + 3 = 5
  strictEqual(sum(-1, 1), 0); // -1 + 1 = 0
  strictEqual(sum(0, 0), 0); // 0 + 0 = 0
  strictEqual(sum(10, 20), 30); // 10 + 20 = 30
});

test('sum should work with floating point numbers', () => {
  strictEqual(sum(2.5, 3.5), 6); // 2.5 + 3.5 = 6
  strictEqual(sum(-1.1, 1.1), 0); // -1.1 + 1.1 = 0
});
