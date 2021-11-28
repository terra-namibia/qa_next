import React from "react";
import { problems } from "../lib/quiz";
import Problem from "./problem";

function quiz() {
  console.log(problems);
  return (
    <>
      <h1>
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
      {problems.map((problem, index) => (
        <Problem key={index} problem={problem.text} index={index} />
        // console.log(`${index + 1}番目は${problem.short}です`)
      ))}
      ;
    </>
  );
}

export default quiz;
