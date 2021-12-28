import ChoiceButton from "./choice-button";
import { RefObject } from "react";
import Image from "next/image";
import smoothscroll from "smoothscroll-polyfill";

type Props = {
  index: number;
  question: string;
  choices: Array<string>;
  useImageQuestion?: boolean;
  useImageChoices?: boolean;
  answers: Array<number>;
  setAnswer: (index: number, answer: number) => void;
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

  const useImageChoicesWidth = 500;
  const useImageChoicesHeight = 300;

  return (
    <div ref={refs[index]} className="py-4 px-4 my-4">
      <h3 className="bg-purple-100 rounded-lg text-xl font-bold md:pr-8 p-4 my-4 py-4">
        <span className="text-gray-700 py-4">質問{index + 1}: </span>
        {question}
        {useImageQuestion ? (
          <div className="flex justify-center my-2">
            <Image
              className="rounded-lg"
              src={`/img-q${index + 1}.jpg`}
              alt={`img-q${index + 1}`}
              width={1388}
              height={1038}
            />
          </div>
        ) : null}
      </h3>
      <div className="flex flex-col">
        <ChoiceButton
          setAnswer={setAnswer}
          scrollToNext={scrollToNext}
          index={index}
          answer={0}
          isSelected={answers[index] === 0}
        >
          {useImageChoices ? (
            <Image
              src={`/img-q${index + 1}-c0.jpg`}
              alt={`img-q${index + 1}-c0`}
              className="rounded-lg"
              width={useImageChoicesWidth}
              height={useImageChoicesHeight}
              objectFit="cover"
            />
          ) : (
            choices[0]
          )}
        </ChoiceButton>
        <ChoiceButton
          setAnswer={setAnswer}
          scrollToNext={scrollToNext}
          index={index}
          answer={1}
          isSelected={answers[index] === 1}
        >
          {useImageChoices ? (
            <Image
              src={`/img-q${index + 1}-c1.jpg`}
              alt={`img-q${index + 1}-c1`}
              className="rounded-lg"
              width={useImageChoicesWidth}
              height={useImageChoicesHeight}
              objectFit="cover"
            />
          ) : (
            choices[1]
          )}
        </ChoiceButton>
        <ChoiceButton
          setAnswer={setAnswer}
          scrollToNext={scrollToNext}
          index={index}
          answer={2}
          isSelected={answers[index] === 2}
        >
          {useImageChoices ? (
            <Image
              src={`/img-q${index + 1}-c2.jpg`}
              alt={`img-q${index + 1}-c2`}
              className="rounded-lg"
              width={useImageChoicesWidth}
              height={useImageChoicesHeight}
              objectFit="cover"
            />
          ) : (
            choices[2]
          )}
        </ChoiceButton>
      </div>
    </div>
  );
};

export default Question;
