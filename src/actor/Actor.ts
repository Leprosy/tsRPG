import { Position } from "../types";

export class Actor {
  name = "";
  hp = 0;
  dex = 0;

  x = 0;
  y = 0;

  constructor(attr: Partial<Actor>) {
    this.set(attr);
  }

  set(attr: Partial<Actor>) {
    Object.assign(this, attr);
  }

  samePosition(P: Position) {
    return this.x === P.x && this.y === P.y;
  }
}
