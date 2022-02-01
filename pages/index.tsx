import type { NextPage } from "next";
import Quiz from "../components/quiz";
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  return (
    <>
      <div className="bg-indigo-100 text-gray-600 font-mono tracking-wide	py-4 px-4">
        <Quiz />
      </div>
    </>
  );
};

export default Home;
