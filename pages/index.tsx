import type { NextPage } from "next";
import Quiz from "../components/quiz";

const Home: NextPage = () => {
  return (
    <div className="bg-indigo-100 text-gray-600 font-mono tracking-wide	py-4 px-4">
      <Quiz />
    </div>
  );
};

export default Home;
