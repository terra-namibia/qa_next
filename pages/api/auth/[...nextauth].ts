import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import axios from "axios";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      //   console.log(`account:${JSON.stringify(account)}`);
      if (account) token.accessToken = account.access_token;
      return token;
    },
    async session({ session, user, token }) {
      //   console.log(`accessToken:${token.accessToken}`);
      //   console.log(`session:${session}`);
      session.accessToken = token.accessToken;
      const URL = process.env.URL_USERS || "";
      axios
        .post(URL, {
          user: {
            user_name: session?.user?.name,
            auth_provider: "GitHub",
          },
        })
        .then((res) => {
          if (res.data) {
            // console.log("ユーザ登録完了");
          } else {
            // console.log("既に登録済みのユーザです");
          }
        })
        .catch((err) => {
          console.log(`ユーザ登録に失敗しました: ${err}`);
        });

      return session;
    },
  },
});
