import { ReactNode } from "react";
import { questions } from "../lib/quiz";

type Props = {
  children?: ReactNode;
  answers: Array<string>;
};

const ResultDetail = (props: Props) => {
  const { answers } = props;
  return (
    <div className="text-left py-4 px-4 my-4">
      <h3 className="text-2xl py-2">質問別の結果はこちら！</h3>
      <ul className="text-xl">
        {questions.map((question, index) => (
          <li key={index}>
            <p>
              質問{index + 1}:{" "}
              <span className="text-red-500">
                {question.answer === answers[index] ? "正解" : "不正解"}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultDetail;
