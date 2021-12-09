import React from "react";
import { questions } from "../lib/quiz";
import Question from "./question";
import { useState, useRef, useCallback } from "react";
import SubmitButton from "./submit-button";

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
    <div className="max-w-sm mr-auto ml-auto">
      <section className="bg-gray-50 rounded-lg py-2 px-4">
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
      </section>
      {questions.map((question, index) => (
        <Question
          key={index}
          question_no={index}
          question={question.text}
          answers={answers}
          setAnswer={setAnswer}
          refs={refs}
        />
      ))}
      <section className="text-2xl text-center bg-gray-50 rounded-lg py-2 px-4 my-10">
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
          <p className="font-bold tracking-tighter leading-tight md:pr-8 my-4">
            <span className="text-red-500">{score}</span>問正解です!
          </p>
        ) : (
          ""
        )}
      </section>
      {submitted ? (
        <section className="text-left bg-gray-50 rounded-lg py-4 px-4 my-4">
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
        </section>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default quiz;
