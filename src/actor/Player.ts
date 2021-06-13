import { Actor } from "./Actor";
import { Position } from "../types";

export class Player extends Actor {
  pow = 0;
  chr = 0;
  min = 0;
  pp = 0;

  ang = 0;

  constructor(attr: Partial<Player>) {
    super(attr);
  }

  set(attr: Partial<Player>) {
    super.set(attr);
  }

  rotateRight() {
    this.ang = (this.ang + Math.PI / 2) % (2 * Math.PI);
  }

  rotateLeft() {
    this.ang = (this.ang - Math.PI / 2) % (2 * Math.PI);

    if (this.ang < 0) {
      this.ang += 2 * Math.PI;
    }
  }

  getBack(): Position {
    let nx = Math.round(this.x - Math.sin(this.ang));
    let ny = Math.round(this.y + Math.cos(this.ang));
    return { x: nx, y: ny };
  }

  getFront(): Position {
    let nx = Math.round(this.x + Math.sin(this.ang));
    let ny = Math.round(this.y - Math.cos(this.ang));
    return { x: nx, y: ny };
  }

  talk(text: string) {
    return `Player ${this.name} says "${text}"`;
  }
}
