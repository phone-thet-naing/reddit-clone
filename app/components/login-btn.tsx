

'use client'

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function LoginBtn() {
    const { data: session } = useSession()
    const [profileStatus, setProfileStatus] = useState<boolean>(false);

    console.log(session)

    if (session) {
        return (
            <>
                <Image alt="User image" src={session.user?.image || ""} height={45} width={45} className="rounded-full" onClick={() => setProfileStatus(!profileStatus)} />
                {profileStatus && <button
                    className="bg-reddit hover:bg-orange-600 text-white text-sm font-semibold py-2 px-4 rounded-full"
                    onClick={() => signOut()}>Sign Out</button>}
            </>
        )
    }
    return (
        <>
            <button
                aria-label="Log in to Reddit"
                className="bg-reddit hover:bg-orange-600 text-white text-sm font-semibold py-2 px-4 rounded-full"
                onClick={() => signIn()}>Log In</button>
                
        </>
    )
}

