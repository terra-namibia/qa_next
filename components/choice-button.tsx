type Props = {
  setAnswer: (index: number, answer: string) => void;
  index: number;
  answer: string;
  isSelected: boolean;
  children: string;
};

const ChoiceButton = (props: Props) => {
  const { setAnswer, index, answer, isSelected, children } = props;
  const style_normal =
    "text-blue-700 hover:bg-blue-500 hover:text-white hover:border-transparent";
  const style_choiced = "text-white bg-blue-500 border-transparent";

  return (
    <button
      onClick={() => setAnswer(index, answer)}
      className={`${
        isSelected ? style_choiced : style_normal
      } border border-blue-500 font-semibold rounded py-2 px-4 mb-4 w-full`}
    >
      {children}
    </button>
  );
};
export default ChoiceButton;
