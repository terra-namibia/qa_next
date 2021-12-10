import React from "react";
import { questions } from "../lib/quiz";
import Question from "./question";
import { useState, useRef, useCallback } from "react";
import Container from "./container";
import Intro from "./intro";
import ResultSummary from "./result-summary";
import ResultDetail from "./result-detail";

function quiz() {
  const refs = questions.map(() => useRef<HTMLDivElement>(null!));
  const [answers, setAnswers] = useState<Array<string>>([]);
  const setAnswer = (index: number, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
    console.log(newAnswers);
  };

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const submit = (answers: Array<string>) => {
    const score: number = answers.filter((answer, index) => {
      return questions[index].answer === answer;
    }).length;

    window.scrollBy({
      top: 300,
      left: 0,
      behavior: "smooth",
    });

    setSubmitted(true);
    setScore(score);
  };

  return (
    <main className="max-w-sm mr-auto ml-auto">
      <Container>
        <Intro />
      </Container>
      {questions.map((question, index) => (
        <Container key={index}>
          <Question
            key={index}
            question_no={index}
            question={question.text}
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
          score={score}
        />
      </Container>
      {submitted ? (
        <Container>
          <ResultDetail answers={answers} />
        </Container>
      ) : (
        <p></p>
      )}
    </main>
  );
}

export default quiz;
