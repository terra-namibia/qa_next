import { memo } from "react";
import { ScoreType } from "../types/scoreType";

type Props = {
  data: ScoreType;
  index: number;
};

const Score = (props: Props) => {
  const { data, index } = props;
  const { score, user_name, date } = data;
  return (
    <tr>
      <td className="border px-4 py-2 text-sm text-right">{index + 1}</td>
      <td className="border px-4 py-2 text-sm text-right">{score}</td>
      <td className="border px-4 py-2 text-sm">{user_name}</td>
      <td className="border px-4 py-2 text-xs">{date}</td>
    </tr>
  );
};

export default memo(Score);
