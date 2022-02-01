import { memo } from "react";
import { ScoreType } from "../types/scoreType";

type Props = {
  score: ScoreType;
  index: number;
};

const Score = (props: Props) => {
  const { score, index } = props;
  return (
    <tr>
      <td className="border px-4 py-2 text-sm text-right">{index + 1}</td>
      <td className="border px-4 py-2 text-sm text-right">{score.score}</td>
      <td className="border px-4 py-2 text-sm">{score.user_name}</td>
      <td className="border px-4 py-2 text-xs">{score.date}</td>
    </tr>
  );
};

export default memo(Score);
