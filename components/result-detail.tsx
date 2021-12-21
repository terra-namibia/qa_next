import { ReactNode, useState } from "react";
import { questions } from "../lib/quiz_text";
import Commentary from "./commentary";
import Container from "./container";

type Props = {
  children?: ReactNode;
  answers: Array<number>;
};

const ResultDetail = (props: Props) => {
  const [shows, setShows] = useState<Array<boolean>>([false]);

  const setShow = (index: number) => {
    const newShows = [...shows];
    newShows[index] = !newShows[index];
    setShows(newShows);
  };

  const { answers } = props;
  return (
    <div className="text-left py-4 px-4 my-4">
      <h3 className="text-2xl py-2">質問別の結果はこちら!</h3>
      <ul className="text-xl">
        {questions.map((question, index) => (
          <li key={index}>
            <button onClick={() => setShow(index)}>
              質問{index + 1}:{" "}
              {question.answer === answers[index] ? (
                <span className="text-gray-400">正解</span>
              ) : (
                <span className="text-red-400">不正解</span>
              )}
            </button>
            {shows[index] ? (
              <Container key={index}>
                <Commentary
                  key={index}
                  index={index}
                  question={question.text}
                  answer={question.answer}
                  commentary={question.commentary}
                  useImageQuestion={question.useImageQuestion}
                  useImageChoices={question.useImageChoices}
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
