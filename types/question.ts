export type Question = {
  text: string;
  short: string;
  useImageQuestion?: boolean;
  useImageChoices?: boolean;
  useImageAnswer?: boolean;
  choices: Array<string>;
  answer: number;
  commentary: string;
};
