type Props = {
  onClick: (index: number, answer: string) => void;
  index: number;
  answer: string;
  children: string;
};

const ChoiceButton = (props: Props) => {
  const { onClick, index, answer, children } = props;

  return (
    <button
      onClick={() => onClick(index, answer)}
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded py-2 px-4 mb-4 w-full"
    >
      {children}
    </button>
  );
};
export default ChoiceButton;
