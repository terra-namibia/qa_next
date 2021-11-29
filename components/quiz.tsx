import React from "react";
import { problems } from "../lib/quiz";
import Problem from "./problem";
import { useState } from "react";

function quiz() {
  const [answers, setAnswers] = useState<Array<string>>(["-"]);
  const setAnswer = (index: number, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
    console.log(newAnswers);
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
          クイズは全部で10問。
          <strong>8問以上正解</strong>
          できるでしょうか？
        </p>
      </div>
      {problems.map((problem, index) => (
        <Problem
          key={index}
          problem={problem.text}
          question_no={index + 1}
          setAnswer={setAnswer}
        />
        // console.log(`${index + 1}番目は${problem.short}です`)
      ))}
      ;
    </div>
  );
}

export default quiz;
