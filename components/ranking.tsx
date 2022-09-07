import { memo } from "react";
import { ScoreType } from "../types/scoreType";
import Score from "./score";

type Props = {
  scores?: Array<ScoreType>;
};

const Ranking = (props: Props) => {
  const { scores } = props;

  return (
    <div className="px-4 text-center">
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-1/12 px-4 py-2 text-sm">順位</th>
            <th className="w-2/12 px-4 py-2 text-sm">スコア</th>
            <th className="w-4/12 px-4 py-2 text-sm">名前</th>
            <th className="w-5/12 px-4 py-2 text-sm">日時</th>
          </tr>
        </thead>
        <tbody>
          {scores
            ? scores.map((score, index) => (
                <Score data={score} index={index} key={index} />
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default memo(Ranking);
