import type { NextPage } from "next";
import Head from "next/head";
import Container from "../components/container";
import Quiz from "../components/quiz";

const Home: NextPage = () => {
  return (
    <div className="bg-indigo-100 text-gray-600 font-mono">
      <Head>
        <title>Quiz</title>
      </Head>
      <Container>
        <Quiz />
      </Container>
    </div>
  );
};

export default Home;
