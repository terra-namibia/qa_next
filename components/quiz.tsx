import React from "react";
import { questions } from "../lib/quiz";
import Question from "./question";
import { useState } from "react";
import SubmitButton from "./submit-button";

function quiz() {
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

    setSubmitted(true);
    setScore(score);
  };

  return (
    <div className="max-w-sm mr-auto ml-auto">
      <div className="bg-indigo-50 rounded-lg py-2 px-4">
        <h1 className="text-2xl md:text-4xl font-bold">
          『xxxx講座』
          <br />
          理解度クイズ
        </h1>
        <p>作成: xxxx</p>
        <p>日本や世界に関するクイズです。</p>
        <p>どの質問も3択です。</p>
        <p>
          クイズは全部で6問。
          <strong>4問以上正解</strong>
          できるでしょうか？
        </p>
      </div>
      {questions.map((question, index) => (
        <Question
          key={index}
          question_no={index}
          question={question.text}
          answers={answers}
          setAnswer={setAnswer}
        />
      ))}
      <div className="text-xl text-center bg-indigo-50 rounded-lg py-2 px-4">
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
        <p className="font-bold tracking-tighter leading-tight md:pr-8 my-4">
          {submitted ? score + "問正解です!" : ""}
        </p>
      </div>
    </div>
  );
}

export default quiz;
