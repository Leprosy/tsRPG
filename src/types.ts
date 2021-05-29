export type Position = {
  x: number;
  y: number;
};

export type AngPosition = {
  x: number;
  y: number;
  ang: number;
};

export type ScriptCode = {
  action: string;
  parameters: Object;
};

export type Script = [ScriptCode, ...ScriptCode[]];

export type MapScript = Record<string, Script>;

export enum RPGState {
  Exploring = 0,
  Combat = 1,
  Script = 2,
}
