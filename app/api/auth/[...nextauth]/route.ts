
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

const authOptions: AuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
            // authorization: {
            //     params: {
            //         prompt: "consent",
            //         access_type: "offline",
            //         response_type: "code"
            //     }
            // }
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID || "", 
            clientSecret: process.env.GITHUB_SECRET || "",
        })
    ],
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }