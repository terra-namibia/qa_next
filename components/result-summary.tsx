import { ReactNode } from "react";
import SubmitButton from "./submit-button";

type Props = {
  children?: ReactNode;
  answers: Array<string>;
  submit: (answers: Array<string>) => void;
  submitted: boolean;
  score: number;
};

const ResultSummary = (props: Props) => {
  const { answers, submit, submitted, score } = props;
  return (
    <div className="text-2xl text-center py-2 px-4 my-10">
      <p>
        質問はこれで以上です！
        <br />
        結果をチェックしてみましょう。
      </p>
      <p>
        <SubmitButton answers={answers} submit={submit}>
          何問正解したかチェック！
        </SubmitButton>
      </p>

      {submitted ? (
        <p className="font-bold md:pr-8 my-4">
          <span className="text-red-500">{score}</span>問正解です!
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default ResultSummary;
