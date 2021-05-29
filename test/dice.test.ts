import { Dice } from "../src/dice/Dice";

const throws = 100;

test("Invalid dice", () => {
  expect(Dice.cast("oaw")).toBe(0);
});
test("Die 1", () => {
  for (let i = 0; i < throws; ++i) {
    const value = Dice.cast("1d10");
    expect(value).toBeGreaterThan(0);
    expect(value).toBeLessThanOrEqual(10);
  }
});
test("Die 2", () => {
  for (let i = 0; i < throws; ++i) {
    const value = Dice.cast("1d10+5");
    expect(value).toBeGreaterThan(5);
    expect(value).toBeLessThanOrEqual(15);
  }
});
test("Die checks", () => {
  for (let i = 0; i < throws; ++i) {
    const value = Dice.check("1d10+5", 4);
    expect(value).toBeTruthy();
  }
});
