import asyncFlow from ".";

describe("async-flow", () => {
  it("should return a function", () => {
    expect(asyncFlow(() => {})).toBeInstanceOf(Function);
  });

  it("should flow", async () => {
    const a = jest.fn(a => a + a);
    const b = jest.fn(b => b * b);
    const result = await asyncFlow(a, b)(2);
    expect(result).toBe(16);
  });

  it("should support async flows", async () => {
    const a = jest.fn(a => a + a);
    const b = jest.fn(b => Promise.resolve(b * b * b));
    const result = await asyncFlow(a, b)(2);
    expect(result).toBe(64);
  });
});
