import ChoiceButton from "./choice-button";
type Props = {
  question_no: number;
  question: string;
  answers: Array<string>;
  setAnswer: (index: number, answer: string) => void;
};

const Question = (props: Props) => {
  const { question_no, question, answers, setAnswer } = props;

  return (
    <div className="bg-indigo-50 rounded-lg py-4 px-4 my-4">
      <h3 className="text-xl md:text-2xl font-bold tracking-tighter leading-tight md:pr-8 my-4">
        <span className="text-gray-700">質問: {question_no} </span>
        {question}
      </h3>
      <div className="flex flex-col">
        <ChoiceButton
          setAnswer={setAnswer}
          index={question_no}
          answer={"a"}
          isSelected={answers[question_no] === "a"}
        >
          aa
        </ChoiceButton>
        <ChoiceButton
          setAnswer={setAnswer}
          index={question_no}
          answer={"b"}
          isSelected={answers[question_no] === "b"}
        >
          bb
        </ChoiceButton>
        <ChoiceButton
          setAnswer={setAnswer}
          index={question_no}
          answer={"c"}
          isSelected={answers[question_no] === "c"}
        >
          cc
        </ChoiceButton>
      </div>
    </div>
  );
};

export default Question;
