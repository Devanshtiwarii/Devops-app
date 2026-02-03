const { add } = require('../server'); 

describe('Math Utility - add()', () => {

  test('adds positive numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('handles negative numbers', () => {
    expect(add(-1, -1)).toBe(-2);
  });

  test('returns a number even if strings are passed', () => {
    expect(add("1", "2")).toBe(3);
  });
});
