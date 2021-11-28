import type { NextPage } from "next";
import Head from "next/head";
import Container from "../components/container";
import Quiz from "../components/quiz";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Quiz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Quiz />
      </Container>
    </>
  );
};

export default Home;
