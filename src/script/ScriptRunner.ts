import { Script } from "../types";

export class ScriptRunner {
  script: Script;
  pointer = -1;

  constructor() {
    this.script = [{ action: "null", parameters: {} }];
  }

  isRunning(): boolean {
    return this.pointer >= 0;
  }

  loadScript(script: Script) {
    this.script = script;
    this.pointer = 0;
  }

  next() {
    if (this.pointer < this.script.length) {
      console.log(this.script[this.pointer++]);
      return true;
    } else {
      return false;
    }
  }
}
