
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
        // Credentials({
        //     credentials: {
        //         email: {},
        //         password: {}
        //     },
        //     authorize: async (credentials) => {
        //         let user = null

        //         const pwHash = 
        //     }
        // }),
    ],
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }