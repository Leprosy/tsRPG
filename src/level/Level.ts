// TODO: Make a parser that reads text and convert it into a Script type data object
import { MapScript, Position } from "../types";

export class Level {
  name: string;
  floor: number[][];
  ceiling: number[][];
  wall: number[][];
  script: MapScript;

  constructor() {
    this.name = "Demo Level";
    this.floor = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 1, 1, 0],
      [0, 1, 2, 1, 0, 1, 1, 0],
      [0, 1, 1, 1, 0, 2, 2, 0],
      [0, 1, 1, 1, 0, 2, 2, 0],
      [0, 1, 1, 1, 0, 2, 2, 0],
      [0, 1, 2, 1, 0, 1, 1, 0],
      [0, 1, 1, 1, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    this.ceiling = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    this.wall = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    this.script = {
      "2x2": [
        { action: "info", parameters: { message: "This is test" } },
        { action: "info", parameters: { message: "End of the test" } },
        { action: "ifgoto", parameters: { yes: 3, no: 4 } },
      ],
    };
  }

  isPassable(P: Position) {
    return (
      P.x >= 0 &&
      P.y >= 0 &&
      P.x < this.floor[0].length &&
      P.y < this.floor.length
    );
  }

  load() {
    console.error("RPG: Not yet implemented");
  }
}
