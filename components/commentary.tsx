import Image from "next/image";

type Props = {
  index: number;
  question: string;
  answer: number;
  choices: Array<string>;
  commentary: string;
  useImageQuestion?: boolean;
  useImageChoices?: boolean;
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
    answers,
  } = props;

  return (
    <div className="px-4 text-base text-gray-500">
      <p className="md:pr-8 my-2">
        <span className="font-bold">(質問) </span>
        {question}
      </p>
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
        ) : null}
      </div>
      <p className="mb-3">
        <span className="font-bold">(正解) </span>
        {choices[answer]}
      </p>
      <p className="mb-4">
        <span className="font-bold">(解説) </span>
        {commentary}
      </p>
    </div>
  );
};

export default Commentary;
