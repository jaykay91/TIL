function sum(a, b) {
  return a + b;
}

describe("Sum Test", () => {
  it("this is sum test", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
