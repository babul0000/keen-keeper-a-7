import Link from "next/link";

import { FaHome } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { MdAvTimer } from "react-icons/md";
import MyLink from "./MyLink";

const Navbar = () => {
    const navItems = [
        {
            path: "/",
            text: (
                <span className="flex items-center gap-1">
                    <FaHome />
                    home
                </span>
            ),
        },
        {
            path: "/timeline",
            text: (
                <span className="flex items-center gap-1">
                    <MdAvTimer />
                    Timeline
                </span>
            ),
        },
        {
            path: "/stats",
            text: (
                <span className="flex items-center gap-1">
                    <ImStatsDots />
                    Stats
                </span>
            ),
        },
    ];

    return (
        <>
            <div className="navbar  bg-base-100 shadow-sm">
                <div className=" w-full md:w-11/12 mx-auto">


                    <div className="navbar-start">
                        <Link href="./" className="btn btn-ghost text-xl">
                            Keen<span className="text-green-800">Keeper</span>
                        </Link>
                    </div>


                    <div className="navbar-end">


                        <ul className="hidden lg:flex menu menu-horizontal px-1">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <MyLink href={item.path}>{item.text}</MyLink>
                                </li>
                            ))}
                        </ul>


                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-2xl">
                                ☰
                            </div>

                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                            >
                                {navItems.map((item, index) => (
                                    <li key={index}>
                                        <MyLink href={item.path}>{item.text}</MyLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
