import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
// Only this GitHub account may sign in to the admin. Set to your username.
const ALLOWED_GITHUB_LOGIN = "jrflynn3";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  // Needed on non-Vercel hosts (e.g. Amplify) so Auth.js trusts the request host.
  trustHost: true,
  callbacks: {
    signIn({ profile }) {
      const login = (profile as { login?: string })?.login?.toLowerCase();
      return login === ALLOWED_GITHUB_LOGIN;
    },
  },
});
