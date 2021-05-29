import { Actor, Monster } from "../actor";

interface CombatAction {
  action: ["attack", "spell", "pass"];
  target?: number;
}

export class Combat {
  active: boolean;
  actors: Actor[];
  activeActorIndex: number;

  constructor() {
    this.active = false;
    this.actors = [];
    this.activeActorIndex = 0;
  }

  addActors(actors: Actor[]): void {
    this.actors = [...this.actors, ...actors];
    this.sortActorList();
  }

  sortActorList(): void {
    this.actors.sort((a: Actor, b: Actor): number => {
      if (a.dex < b.dex) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  getMonsters() {
    return this.actors.filter((actor: Actor) => actor instanceof Monster);
  }

  doAction(action: CombatAction) {}
}
