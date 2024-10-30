function getSum(a: number, b: number) {
  return a + b
}

test('sum to be 3', () => {
  expect(getSum(1, 2)).toBe(3)
})
