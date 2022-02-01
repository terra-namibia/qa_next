import { useState, useEffect, memo } from "react";
import Image from "next/image";
import Ranking from "./ranking";
import { useScores } from "../lib/useScores";

type Props = {
  questionCount: number;
};

const Intro = (props: Props) => {
  const { questionCount } = props;
  const [show, setShow] = useState<boolean>(false);
  const { getScores, scores } = useScores();
  useEffect(() => getScores(), [getScores]);

  return (
    <div className="py-4 px-4">
      <h1 className="text-4xl font-bold text-center mt-4">
        ナミビア検定
        <br />
      </h1>
      {/* <p>作成: xxxx</p> */}
      <Image
        src="/flag-namibia.jpg"
        alt="/img-q0.jpg"
        width={1388}
        height={1038}
        objectFit="cover"
      />
      <p>ナミビアに関するクイズです。</p>
      <p>どの質問も3択です。</p>
      <p>
        クイズは全部で{questionCount}問。
        <strong>全問正解</strong>
        できるでしょうか？
      </p>
      <button
        onClick={() => {
          setShow(!show), getScores();
        }}
        className="text-gray-500 border-4 border-amber-700 font-semibold rounded-lg py-2 px-4 mt-4 w-full"
      >
        <span className="underline text-sm text-gray-400">
          ランキングを見る
        </span>
        {show ? <Ranking scores={scores}></Ranking> : null}
      </button>
    </div>
  );
};

export default memo(Intro);
