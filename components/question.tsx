import ChoiceButton from "./choice-button";
import { RefObject } from "react";
import Image from "next/image";
import smoothscroll from 'smoothscroll-polyfill';


type Props = {
  index: number;
  question: string;
  choices: { a: string; b: string; c: string };
  useImageQuestion?: boolean;
  useImageChoices?: boolean;
  answers: Array<string>;
  setAnswer: (index: number, answer: string) => void;
  refs: Array<RefObject<HTMLDivElement>>;
};

const Question = (props: Props) => {
  const {
    index,
    question,
    choices,
    useImageQuestion,
    useImageChoices,
    answers,
    setAnswer,
    refs,
  } = props;

  const scrollToNext = () => {
    smoothscroll.polyfill();

    refs[index + 1]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div ref={refs[index]} className="py-4 px-4 my-4">
      <h3 className="text-xl font-bold tracking-normal leading-tight md:pr-8 my-4">
        <span className="text-gray-700">質問{index + 1}: </span>
        {question}
      </h3>
      <div className="flex flex-col">
        {useImageQuestion ? (
          <div className="flex justify-center my-4">
            <Image
              className="rounded-lg"
              src={`/img-q${index + 1}.jpg`}
              alt={`img-q${index + 1}`}
              width={1388}
              height={1038}
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
          {useImageChoices ? (
            <Image
              src={`/img-q${index + 1}-ca.jpg`}
              alt={`img-q${index + 1}-ca`}
              className="rounded-lg"
              width={2048}
              height={1700}
              objectFit="cover"
            />
          ) : (
            choices.a
          )}
        </ChoiceButton>
        <ChoiceButton
          setAnswer={setAnswer}
          scrollToNext={scrollToNext}
          index={index}
          answer={"b"}
          isSelected={answers[index] === "b"}
        >
          {useImageChoices ? (
            <Image
              src={`/img-q${index + 1}-cb.jpg`}
              alt={`img-q${index + 1}-cb`}
              className="rounded-lg"
              width={2048}
              height={1700}
              objectFit="cover"
            />
          ) : (
            choices.b
          )}
        </ChoiceButton>
        <ChoiceButton
          setAnswer={setAnswer}
          scrollToNext={scrollToNext}
          index={index}
          answer={"c"}
          isSelected={answers[index] === "c"}
        >
          {useImageChoices ? (
            <Image
              src={`/img-q${index + 1}-cc.jpg`}
              alt={`img-q${index + 1}-cc`}
              className="rounded-lg"
              width={2048}
              height={1700}
              objectFit="cover"
            />
          ) : (
            choices.c
          )}
        </ChoiceButton>
      </div>
    </div>
  );
};

export default Question;
