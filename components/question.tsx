import ChoiceButton from "./choice-button";
import { useRef, createRef, MutableRefObject } from "react";

type Props = {
  question_no: number;
  question: string;
  answers: Array<string>;
  setAnswer: (index: number, answer: string) => void;
  refs: Array<MutableRefObject<HTMLDivElement>>;
};

const Question = (props: Props) => {
  const { question_no, question, answers, setAnswer, refs } = props;

  const scrollToNext = () => {
    refs[question_no + 1]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      ref={refs[question_no]}
      className="bg-indigo-50 rounded-lg py-4 px-4 my-4"
    >
      <h3 className="text-xl font-bold tracking-tighter leading-tight md:pr-8 my-4">
        <span className="text-gray-700">質問: {question_no + 1} </span>
        {question}
      </h3>
      <div className="flex flex-col">
        <ChoiceButton
          setAnswer={setAnswer}
          scrollToNext={scrollToNext}
          index={question_no}
          answer={"a"}
          isSelected={answers[question_no] === "a"}
        >
          aa
        </ChoiceButton>
        <ChoiceButton
          setAnswer={setAnswer}
          scrollToNext={scrollToNext}
          index={question_no}
          answer={"b"}
          isSelected={answers[question_no] === "b"}
        >
          bb
        </ChoiceButton>
        <ChoiceButton
          setAnswer={setAnswer}
          scrollToNext={scrollToNext}
          index={question_no}
          answer={"c"}
          isSelected={answers[question_no] === "c"}
        >
          cc
        </ChoiceButton>
      </div>
    </section>
  );
};

export default Question;
