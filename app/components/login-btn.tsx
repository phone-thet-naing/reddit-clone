

'use client'

import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function LoginBtn() {
    const { data: session } = useSession()
    const [profileStatus, setProfileStatus] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => setIsOpen(!isOpen)

    console.log(session)

    if (session) {
        return (
            <>

                {profileStatus && <button
                    className="bg-reddit hover:bg-orange-600 text-white text-sm font-semibold py-2 px-4 rounded-full"
                    onClick={() => signOut()}>Sign Out</button>}
                <div className="relative inline-block text-left">
                    <div>
                        <img alt="User Avatar" src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_5.png" height={40} width={40} className="rounded-full cursor-pointer" onClick={toggleDropdown} />
                    </div>


                    {/* Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95" */}

                    {isOpen && (
                        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 transform opacity-100 scale-100" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                            <div className="py-1" role="none">
                                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-1">Support</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-2">License</a>
                                <form method="POST" action={() => signOut()} role="none">
                                    <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-3">Sign out</button>
                                </form>
                                <button
                                    className="bg-reddit hover:bg-orange-600 text-white text-sm font-semibold py-2 px-4 rounded-full"
                                    onClick={() => signOut()}>Sign Out</button>
                            </div>
                        </div>
                    )}
                </div>
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

