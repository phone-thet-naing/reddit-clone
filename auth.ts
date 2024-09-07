import { AuthOptions, getServerSession } from "next-auth"
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google"
import type { Account, Profile } from "next-auth"

const authOptions: AuthOptions = {
    // Configure one or more authentication providers
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

        // ...add more providers here
    ],

    // callbacks: {
    //     async signIn({ account, profile }: {account: Account | null, profile: Profile | undefined}) {
    //         if (account?.provider === "google") {
    //             return profile?.email_verified && profile.email.endsWith("@example.com")
    //         }
    //         return true // Do different verification for other providers that don't have `email_verified`
    //     },
    // }
}

/**
 * Helper function to get the session on the server without having to import the authOptions object every single time
 * @returns The session object or null
 */
const getSession = () => getServerSession(authOptions)

export { authOptions, getSession }