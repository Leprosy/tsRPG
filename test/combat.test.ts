import { Player, Monster } from "../src/actor";
import { monsters, player, expectedOrder } from "./data/actors.data";
import { Combat } from "../src/combat/Combat";

const P: Player = new Player(player);
const M: Monster[] = [];
const C: Combat = new Combat();

monsters.forEach((actor: any) => {
  M.push(new Monster(actor));
});

test("Init combat with some actors", () => {
  C.addActors(M);
  C.addActors([P]);
  expect(JSON.stringify(C.actors)).toEqual(expectedOrder);
});
