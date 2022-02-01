import React from "react";
import { useState, createRef } from "react";
import { useSession } from "next-auth/react";
import { questions } from "../lib/quiz-text";
import Container from "./container";
import Intro from "./intro";
import Login from "./login";
import Question from "./question";
import ResultSummary from "./result-summary";
import ResultDetail from "./result-detail";
import ResultShare from "./result-share";
import { event } from "../lib/gtag";

const Quiz = () => {
  const refs = questions.map(() => createRef<HTMLDivElement>());
  const [answers, setAnswers] = useState<Array<number>>([]);
  const setAnswer = (index: number, answer: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const { data: session } = useSession();
  const [userName, setUserName] = useState<string | null | undefined>(
    session?.user?.name
  );

  const submit = (answers: Array<number>) => {
    const score: number = answers.filter((answer, index) => {
      return questions[index].answer === answer;
    }).length;

    window.scrollBy({
      top: 300,
      left: 0,
      behavior: "smooth",
    });

    // Analyticsに送信する情報
    event({
      action: "click_submit",
      category: "score",
      label: "score",
      value: score,
    });

    setSubmitted(true);
    setScore(score);
    setUserName(session?.user?.name);
  };
  const message = `${questions.length}問中 ${score}問正解 でした!\n`;

  return (
    <main className="max-w-xl mr-auto ml-auto">
      <Container>
        <Intro questionCount={questions.length} />
      </Container>
      <Container>
        <Login />
      </Container>

      {questions.map((question, index) => (
        <Container key={index}>
          <Question
            key={index}
            index={index}
            question={question.text}
            useImageQuestion={question.useImageQuestion}
            useImageChoices={question.useImageChoices}
            choices={question.choices}
            answers={answers}
            setAnswer={setAnswer}
            refs={refs}
          />
        </Container>
      ))}
      <Container>
        <ResultSummary
          answers={answers}
          submit={submit}
          submitted={submitted}
          questionCount={questions.length}
          score={score}
          userName={userName}
          setUserName={setUserName}
        />
      </Container>
      {submitted ? (
        <Container>
          <ResultDetail answers={answers} />
          <ResultShare message={message} />
        </Container>
      ) : (
        <p></p>
      )}
    </main>
  );
};

export default Quiz;
