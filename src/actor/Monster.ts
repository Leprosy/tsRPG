import { Dice } from "../dice/Dice";
import { Utils } from "../Utils/Utils";
import { Actor } from "./Actor";

export class Monster extends Actor {
  talk(text: string) {
    return `Monster ${this.name} says "${text}"`;
  }

  static generateMonster(): Monster {
    const adj = ["Great", "Death", "Demonic", "Mad", "Fire"];
    const race = ["Cat", "Goblin", "Dragon", "Orc", "Wolf", "Bear", "Knight"];
    const name = `${Utils.getRandomElem(adj)} ${Utils.getRandomElem(race)}`;
    const hp = Dice.cast("1d10+10");
    const dex = Dice.cast("1d10+10");

    return new Monster({ name, hp, dex });
  }
}
