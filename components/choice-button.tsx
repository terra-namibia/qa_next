import { ReactNode } from "react";

type Props = {
  setAnswer: (index: number, answer: number) => void;
  scrollToNext: () => void;
  index: number;
  answer: number;
  isSelected: boolean;
  children: ReactNode;
};

const ChoiceButton = (props: Props) => {
  const { setAnswer, scrollToNext, index, answer, isSelected, children } =
    props;
  const style_normal =
    "text-blue-700 hover:bg-blue-300 hover:text-white hover:border-transparent";
  const style_choiced = "text-white bg-blue-400 border-transparent";

  return (
    <button
      onClick={() => {
        setAnswer(index, answer);
        scrollToNext();
      }}
      className={`${
        isSelected ? style_choiced : style_normal
      } border border-blue-500 font-semibold rounded py-2 px-4 mb-4 w-full`}
    >
      {children}
    </button>
  );
};
export default ChoiceButton;
