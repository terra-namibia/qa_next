import { ReactNode, ChangeEvent, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { ScaleFade } from "@chakra-ui/react";
import axios from "axios";
import SubmitButton from "./submit-button";

type Props = {
  children?: ReactNode;
  answers: Array<number>;
  submit: (answers: Array<number>) => void;
  submitted: boolean;
  questionCount: number;
  score: number;
  userName: string | null | undefined;
  setUserName: any;
};

const ResultSummary = (props: Props) => {
  const {
    answers,
    submit,
    submitted,
    questionCount,
    score,
    userName,
    setUserName,
  } = props;

  const { data: session, status } = useSession();

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);

  const style_button_authenticated =
    "border border-blue-400 text-white bg-blue-500 hover:bg-blue-700 hover:text-white hover:border-transparent";
  const style_button_not_authenticated = "border text-gray-200";
  const [message, setMessage] = useState<string>("");
  const registerScores = (
    score: number,
    user_name: string | null | undefined
  ) => {
    const URL = process.env.NEXT_PUBLIC_URL_POST_SCORES || "";
    const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN || "";

    axios
      .post(URL, {
        token: TOKEN,
        score: {
          score: score,
        },
        user: {
          user_name: user_name,
          auth_provider: "GitHub",
        },
      })
      .then((response) => {
        if (response?.statusText === "success") {
          setMessage("記録しました！");
        } else {
          setMessage("記録済みです");
        }
      })
      .catch((error) => {
        if (error.response?.statusText === "Unauthorized") {
          setMessage("ごめんなさい、ログインしたユーザで記録をお願いします。");
        } else {
          setMessage("記録できません！");
        }
      });
  };

  return (
    <div className="text-2xl text-center text-gray-600 py-2 px-4 my-10">
      <p>
        クイズはこれで終わりです!
        <br />
        結果をチェックしてみましょう。
      </p>
      <p>
        <SubmitButton answers={answers} submit={submit}>
          何問正解したかチェック!
        </SubmitButton>
      </p>

      {submitted ? (
        <>
          <p className="tracking-widest font-bold my-4">
            {questionCount}問中<span className="text-blue-600">{score}</span>
            問正解でした!
          </p>
          <div className="text-lg">
            <span className="mr-4">名前</span>
            <input
              placeholder="ユーザ名"
              value={userName || ""}
              onChange={onChangeUserName}
              className="rounded-md pl-1 mr-4 border-4"
              disabled={session === undefined ? true : false}
            />
            <button
              onClick={() => registerScores(score, userName)}
              className={`${
                session
                  ? style_button_authenticated
                  : style_button_not_authenticated
              } rounded-full py-2 px-4 mt-4 mb-1 text-base tracking-wider font-semibold `}
              disabled={session === undefined ? true : false}
              style={{ pointerEvents: session === undefined ? "none" : "auto" }}
            >
              <p className="px-3">結果を記録する</p>
            </button>
            <p className="pb-3 text-md text-gray-400">{message}</p>
            <p className="pb-3 text-xs text-gray-400">
              ※ボタンを押さなければ記録されません
            </p>
          </div>
        </>
      ) : null}
      {submitted && questionCount === score ? (
        <div className=" mb-2">
          <ScaleFade
            in={submitted}
            initialScale={0.1}
            transition={{
              enter: { duration: 6, delay: 2 },
            }}
          >
            <Image
              src={`/congrats.jpg`}
              alt={`congrats`}
              className="rounded-lg"
              width={1388}
              height={1038}
              objectFit="cover"
            />
          </ScaleFade>
          <p className="text-gray-400 text-xl">ぜひ解説もご覧ください！</p>
        </div>
      ) : submitted ? (
        <div className=" mb-2">
          <Image
            src={`/otsu.jpg`}
            alt={`otsu`}
            className="rounded-lg"
            width={1388}
            height={1038}
            objectFit="cover"
          />
          <p className="text-gray-400 text-xl">
            お疲れ様でした。
            <br />
            詳しくは解説をご覧ください！
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default ResultSummary;
