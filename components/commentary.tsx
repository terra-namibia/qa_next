import Image from "next/image";

type Props = {
  index: number;
  question: string;
  answer: number;
  choices: Array<string>;
  commentary: string;
  useImageQuestion?: boolean;
  useImageChoices?: boolean;
  useImageAnswer?: boolean;
  answers: Array<number>;
};

const Commentary = (props: Props) => {
  const {
    index,
    question,
    answer,
    choices,
    commentary,
    useImageQuestion,
    useImageChoices,
    useImageAnswer,
    answers,
  } = props;

  return (
    <div className="px-4 text-base text-gray-500">
      <p>
        <span className="font-bold">(質問) </span>
        {question}
      </p>
      <div className="flex flex-col">
        {useImageQuestion ? (
          <div className="flex justify-center mt-1 mb-2">
            <Image
              className="rounded-lg"
              src={`/img-q${index + 1}.jpg`}
              alt={`img-q${index + 1}`}
              width={1388}
              height={1038}
            />
          </div>
        ) : null}
      </div>
      <p className="mt-2">
        <span className="font-bold">(正解) </span>
        {choices[answer]}
      </p>
      <div className="flex flex-col">
        {useImageChoices ? (
          <div className="flex justify-center mb-2">
            <Image
              src={`/img-q${index + 1}-c${answer}.jpg`}
              alt={`img-q${index + 1}-c${answer}`}
              className="rounded-lg"
              width={1388}
              height={1038}
              objectFit="cover"
            />
          </div>
        ) : null}
        {useImageAnswer ? (
          <div className="flex justify-center mb-2">
            <Image
              src={`/img-a${index + 1}.jpg`}
              alt={`img-a${index + 1}`}
              className="rounded-lg"
              width={1388}
              height={1038}
              objectFit="cover"
            />
          </div>
        ) : null}
      </div>
      <p className="mt-2 mb-4">
        <span className="font-bold">(解説) </span>
        {commentary}
      </p>
    </div>
  );
};

export default Commentary;
