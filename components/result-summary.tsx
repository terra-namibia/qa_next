import { ReactNode } from "react";
import SubmitButton from "./submit-button";
import Image from "next/image";
import { ScaleFade } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
  answers: Array<number>;
  submit: (answers: Array<number>) => void;
  submitted: boolean;
  questionCount: number;
  score: number;
};

const ResultSummary = (props: Props) => {
  const { answers, submit, submitted, questionCount, score } = props;
  return (
    <div className="text-2xl text-center text-gray-600 py-2 px-4 my-10">
      <p>
        クイズはこれで終わりです!
        <br />
        結果をチェックしてみましょう。
      </p>
      <p>
        <SubmitButton answers={answers} submit={submit}>
          何問正解したかチェック!
        </SubmitButton>
      </p>

      {submitted ? (
        <p className="tracking-widest font-bold md:pr-8 my-4">
          {questionCount}問中<span className="text-blue-600">{score}</span>
          問正解でした!
        </p>
      ) : null}
      {submitted && questionCount === score ? (
        <div className=" mb-2">
          <ScaleFade
            in={submitted}
            initialScale={0.1}
            transition={{
              enter: { duration: 6, delay: 2 },
            }}
          >
            <Image
              src={`/congrats.jpg`}
              alt={`congrats`}
              className="rounded-lg"
              width={1388}
              height={1038}
              objectFit="cover"
            />
          </ScaleFade>
          <p className="text-gray-400 text-xl">ぜひ解説もご覧ください！</p>
        </div>
      ) : submitted ? (
        <div className=" mb-2">
          <Image
            src={`/otsu.jpg`}
            alt={`otsu`}
            className="rounded-lg"
            width={1388}
            height={1038}
            objectFit="cover"
          />
          <p className="text-gray-400 text-xl">
            お疲れ様でした。
            <br />
            詳しくは解説をご覧ください！
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default ResultSummary;
