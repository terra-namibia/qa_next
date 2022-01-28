import type { NextPage } from "next";
import Quiz from "../components/quiz";
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  return (
    <>
      {!session && (
        <>
          status : {status} <br />
          Not signed in <br />
          <button onClick={() => signIn()}>Sign inする</button>
        </>
      )}
      {session && (
        <>
          status : {status} <br />
          Signed in as <br />
          <img src={session.user?.image ?? ""} width="50px" />
          username: {session.user?.name} <br />
          useremail : {session.user?.email} <br />
          expires : {session.expires} <br />
          AccessToken : {session.accessToken} <br />
          <button onClick={() => signOut()}>Sign outする</button>
        </>
      )}
      <div className="bg-indigo-100 text-gray-600 font-mono tracking-wide	py-4 px-4">
        <Quiz />
      </div>
    </>
  );
};

export default Home;
