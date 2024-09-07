import Image from "next/image";
import redditLogo from "../../assets/reddit-seeklogo.svg";
import LoginBtn from "./login-btn";

const Navbar = () => {
    return (
        <nav className="flex justify-between">
            <a href="/">
                <Image
                    priority
                    src={redditLogo}
                    height={45}
                    alt="logo"
                />
            </a>

            {/* <button className="bg-reddit hover:bg-orange-600 text-white font-semibold text-lg py-2 px-4 rounded">Login</button> */}
            <LoginBtn />
        </nav>
    )
}

export default Navbar;
