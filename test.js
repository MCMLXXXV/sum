const sum = require('.');

test('1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('1 + 2 + 3 = 6', () => {
  expect(sum(1, 2, 3)).toBe(6);
});

test('1 + 2 + 3 + 4 = 10', () => {
  expect(sum(1, 2, 3, 4)).toBe(10);
});
