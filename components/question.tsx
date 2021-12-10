import ChoiceButton from "./choice-button";
import { useRef, createRef, MutableRefObject } from "react";
import Image from "next/image";

type Props = {
  index: number;
  question: string;
  useImage?: boolean;
  answers: Array<string>;
  setAnswer: (index: number, answer: string) => void;
  refs: Array<MutableRefObject<HTMLDivElement>>;
};

const Question = (props: Props) => {
  const { index, question, useImage, answers, setAnswer, refs } = props;

  const scrollToNext = () => {
    refs[index + 1]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div ref={refs[index]} className="py-4 px-4 my-4">
      <h3 className="text-xl font-bold tracking-tighter leading-tight md:pr-8 my-4">
        <span className="text-gray-700">質問: {index + 1} </span>
        {question}
      </h3>
      <div className="flex flex-col">
        {useImage ? (
          <div className="flex justify-center my-4">
            <Image
              className="rounded-lg"
              src={`/img-q${index + 1}.jpg`}
              alt={`img-q${index + 1}`}
              width={160}
              height={160}
            />
          </div>
        ) : (
          ""
        )}

        <ChoiceButton
          setAnswer={setAnswer}
          scrollToNext={scrollToNext}
          index={index}
          answer={"a"}
          isSelected={answers[index] === "a"}
        >
          aa
        </ChoiceButton>
        <ChoiceButton
          setAnswer={setAnswer}
          scrollToNext={scrollToNext}
          index={index}
          answer={"b"}
          isSelected={answers[index] === "b"}
        >
          bb
        </ChoiceButton>
        <ChoiceButton
          setAnswer={setAnswer}
          scrollToNext={scrollToNext}
          index={index}
          answer={"c"}
          isSelected={answers[index] === "c"}
        >
          cc
        </ChoiceButton>
      </div>
    </div>
  );
};

export default Question;
