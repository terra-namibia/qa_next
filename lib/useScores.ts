import { useCallback, useState } from "react";
import axios from "axios";
import { ScoreType } from "../types/scoreType";

export const useScores = () => {
  const [scores, setScores] = useState<Array<ScoreType>>();
  const getScores = useCallback(() => {
    const URL = process.env.NEXT_PUBLIC_URL_SCORES || "";
    const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN || "";

    axios
      .post(URL, {
        token: TOKEN,
      })
      .then((res) => {
        if (res.data) {
          setScores(res.data);
        } else {
          // console.log("データ無し");
        }
      })
      .catch(() => console.log("スコア取得に失敗しました"));
  }, []);

  return { getScores, scores };
};
