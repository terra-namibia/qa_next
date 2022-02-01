import { ReactNode, useState } from "react";
import { questions } from "../lib/quiz-text";
import Commentary from "./commentary";
import Container from "./container";

type Props = {
  children?: ReactNode;
  answers: Array<number>;
};

const ResultDetail = (props: Props) => {
  const [commentShows, setCommentShows] = useState<Array<boolean>>([false]);

  const switchCommentShows = (index: number) => {
    const newCommentShows = [...commentShows];
    newCommentShows[index] = !newCommentShows[index];
    setCommentShows(newCommentShows);
  };

  const { answers } = props;

  return (
    <div className="py-4 px-4 my-4">
      <h3 className="text-gray-600 text-2xl text-center py-2">
        質問別の結果はこちら!
      </h3>
      <ul className="text-xl text-left">
        {questions.map((question, index) => (
          <li key={index}>
            <button
              className="text-gray-500 border-4 border-amber-700 font-semibold rounded-full py-2 px-4 mb-4 w-full"
              onClick={() => switchCommentShows(index)}
            >
              質問{index + 1}:{" "}
              {question.answer === answers[index] ? (
                <span className="text-gray-400">正解 </span>
              ) : (
                <span className="text-red-400">不正解 </span>
              )}
              <span className="underline text-sm text-gray-400">
                解説を見る
              </span>
            </button>
            {commentShows[index] ? (
              <Container key={index}>
                <Commentary
                  key={index}
                  index={index}
                  question={question.text}
                  answer={question.answer}
                  commentary={question.commentary}
                  useImageQuestion={question.useImageQuestion}
                  useImageChoices={question.useImageChoices}
                  useImageAnswer={question.useImageAnswer}
                  choices={question.choices}
                  answers={answers}
                />
              </Container>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultDetail;
