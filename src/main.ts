import { Player, Monster } from "./actor/";
import { Combat } from "./combat/Combat";
import { Level } from "./level/Level";
import { ScriptRunner } from "./script/ScriptRunner";
import { RPGState } from "./types";

class RPG {
  level: Level;
  player: Player;
  monsters: Monster[];
  combat: Combat;
  scriptRunner: ScriptRunner;
  state: RPGState;

  constructor() {
    this.scriptRunner = new ScriptRunner();
    this.state = RPGState.Exploring;
    this.player = new Player({
      name: "Sir Leprosy",
      hp: 10,
      dex: 14,
      x: 5,
      y: 5,
      ang: 0,
    });
    this.level = new Level();
    this.combat = new Combat();
    this.monsters = [
      Monster.generateMonster(),
      Monster.generateMonster(),
      Monster.generateMonster(),
    ];
  }

  forward() {
    if (this.state !== RPGState.Exploring) return;
    const front = this.player.getFront();

    if (this.level.isPassable(front)) {
      this.player.set(front);
    }
  }

  back() {
    if (this.state !== RPGState.Exploring) return;
    const back = this.player.getBack();

    if (this.level.isPassable(back)) {
      this.player.set(back);
    }
  }

  rotateLeft() {
    if (this.state !== RPGState.Exploring) return;
    this.player.rotateLeft();
  }

  rotateRight() {
    if (this.state !== RPGState.Exploring) return;
    this.player.rotateRight();
  }

  action() {
    switch (this.state) {
      case RPGState.Exploring:
        const scriptKey = `${Main.player.x}x${Main.player.y}`;
        const script = Main.level.script[scriptKey];

        if (script) {
          this.scriptRunner.loadScript(Main.level.script[scriptKey]);
          this.state = RPGState.Script;
          this.scriptRunner.next();
        } else {
          console.log("No script here");
        }

        break;

      case RPGState.Script:
        if (this.state == RPGState.Script) {
          if (!this.scriptRunner.next()) {
            this.state = RPGState.Exploring;
          }
        }

        break;
    }
  }

  drawMap(): void {
    let content = "";

    for (let y = 0; y < this.level.floor.length; ++y) {
      let rowString = "";
      let row = this.level.floor[y];

      for (let x = 0; x < row.length; ++x) {
        if (this.player.samePosition({ x, y })) {
          let avatar = "";
          switch (this.player.ang) {
            case 0:
              avatar = "^";
              break;
            case Math.PI / 2:
              avatar = ">";
              break;
            case Math.PI:
              avatar = "v";
              break;
            case 3 * (Math.PI / 2):
              avatar = "<";
              break;
            default:
              avatar = "X";
              break;
          }
          rowString += avatar;
        } else {
          rowString += row[x];
        }
      }

      content += `${y} - ${rowString}\n`;
    }

    content += `\nP1: ${this.player.x}-${this.player.y}`;

    document.getElementsByTagName("textarea")[0].innerHTML = content;
  }
}

const Main = new RPG();

// FIXME: This is for debug only
const eventFunc: { [item: string]: () => void } = {
  ArrowUp: () => {
    Main.forward();
  },
  ArrowDown: () => {
    Main.back();
  },
  ArrowLeft: () => {
    Main.rotateLeft();
  },
  ArrowRight: () => {
    Main.rotateRight();
  },
  Space: () => {
    Main.action();
  },
};

window.addEventListener("keyup", (event) => {
  console.log("Key pressed is:", event.code);
  const f = eventFunc[event.code];

  if (typeof f === "function") {
    eventFunc[event.code]();
  }

  Main.drawMap();
});

Main.drawMap();
console.log("RPG done");
