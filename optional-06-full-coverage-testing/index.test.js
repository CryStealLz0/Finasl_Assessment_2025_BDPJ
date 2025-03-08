import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Menguji kalo paramaeter bukan angka
test('sum harus mengembalikan nilai 0 jika parameter bukan angka', () => {
    assert.strictEqual(sum('a', 5), 0);
    assert.strictEqual(sum(5, 'b'), 0);
    assert.strictEqual(sum({}, []), 0);
    assert.strictEqual(sum(null, undefined), 0);
});

// Menguji Kalo salah satu patameter kurang dari 0
test('sum harus mengembalikan 0 jika satu parameter kurang dari 0', () => {
    assert.strictEqual(sum(-1, 5), 0);
    assert.strictEqual(sum(5, -2), 0);
    assert.strictEqual(sum(-1, -2), 0);
});

// Menguji kalo kedua parameter adalah angka positif
test('sum harus mengembalikan hasil penjumlahan jika kedua parameter angka positif', () => {
    assert.strictEqual(sum(3, 7), 10);
    assert.strictEqual(sum(0, 7), 7);
    assert.strictEqual(sum(10, 20), 30);
});

// Menguji kalo salah satu parameter adalah 0
test('sum harus tetep berfungsi kalo salah satu parameter adalah 0', () => {
    assert.strictEqual(sum(0, 10), 10);
    assert.strictEqual(sum(5, 0), 5);
});
