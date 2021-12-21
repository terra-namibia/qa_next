import type { NextPage } from "next";
import Head from "next/head";
import Quiz from "../components/quiz";

const Home: NextPage = () => {
  return (
    <div className="bg-indigo-100 text-gray-600 font-mono tracking-wide	py-4 px-4">
      <Head>
        <title>Quiz</title>
      </Head>
      <Quiz />
    </div>
  );
};

export default Home;
