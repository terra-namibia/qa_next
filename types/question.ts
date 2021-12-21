export type Question = {
  text: string;
  short: string;
  useImageQuestion?: boolean;
  useImageChoices?: boolean;
  choices: Array<string>;
  answer: number;
  commentary: string;
};
