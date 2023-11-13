export enum KEY_TYPE {
  NULL,
  INCORRECT,
  CORRECT,
}

export type Letter = {
  idx: number;
  key: string;
  state: KEY_TYPE;
};

export type Words = Letter[][];
