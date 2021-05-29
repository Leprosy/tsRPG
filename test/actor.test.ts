import { Player, Monster } from "../src/actor";

const M = new Monster({ name: "TestMonster", hp: 10, dex: 18 });
const M1 = new Monster({ x: 5, y: 5 });
const M2 = new Monster({ x: 1, y: 1 });
const P = new Player({
  name: "TestPlayer",
  hp: 10,
  dex: 12,
  x: 5,
  y: 5,
  ang: 0,
});

test("Player talks", () => {
  expect(P.talk("hi")).toBe('Player TestPlayer says "hi"');
});
test("Monster talks", () => {
  expect(M.talk("hi")).toBe('Monster TestMonster says "hi"');
});

test("Get front position", () => {
  expect(P.getFront()).toStrictEqual({ x: 5, y: 4 });
});
test("Get back position", () => {
  expect(P.getBack()).toStrictEqual({ x: 5, y: 6 });
});

test("Rotate right and get new angle", () => {
  P.rotateRight();
  expect(P.ang).toBe(Math.PI / 2);
});
test("Get new front position", () => {
  expect(P.getFront()).toStrictEqual({ x: 6, y: 5 });
});
test("Get new back position", () => {
  expect(P.getBack()).toStrictEqual({ x: 4, y: 5 });
});

test("Rotate right and get new angle again", () => {
  P.rotateRight();
  expect(P.ang).toBe(Math.PI);
});
test("Get new front position again", () => {
  expect(P.getFront()).toStrictEqual({ x: 5, y: 6 });
});
test("Get new back position again", () => {
  expect(P.getBack()).toStrictEqual({ x: 5, y: 4 });
});

test("Rotate right and get new angle one more time", () => {
  P.rotateRight();
  expect(P.ang).toBe(3 * (Math.PI / 2));
});
test("Get final new front position", () => {
  expect(P.getFront()).toStrictEqual({ x: 4, y: 5 });
});
test("Get final new back position", () => {
  expect(P.getBack()).toStrictEqual({ x: 6, y: 5 });
});

test("Rotate right a last time and get starting angle", () => {
  P.rotateRight();
  expect(P.ang).toBe(0);
});
test("Rotate left from zero? Should be positive", () => {
  P.rotateLeft();
  expect(P.ang).toBe(3 * (Math.PI / 2));
});

test("Same positions", () => {
  expect(P.samePosition(M1)).toBe(true);
});
test("Different positions", () => {
  expect(P.samePosition(M2)).toBe(false);
});
