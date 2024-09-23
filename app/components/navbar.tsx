import Image from "next/image";
import redditLogo from "../../assets/reddit-seeklogo.svg";
import LoginBtn from "./login-btn";


const Navbar = () => {
    return (
        <nav className="w-full flex justify-between">
            <a href="/">
                <Image
                    priority
                    src={redditLogo}
                    height={40}
                    alt="logo"
                />
            </a>

            <input type="search" name="search" id="search" placeholder="Enter keyword" className="py-3 px-4 border w-96 rounded-full text-sm focus:outline-none focus:ring" />

            {/* <button className="bg-reddit hover:bg-orange-600 text-white font-semibold text-lg py-2 px-4 rounded">Login</button> */}
            <LoginBtn />
        </nav>
    )
}

export default Navbar;
