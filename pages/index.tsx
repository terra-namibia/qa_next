import type { NextPage } from "next";
import Container from "../components/container";
import Quiz from "../components/quiz";

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Quiz />
      </Container>
    </>
  );
};

export default Home;
