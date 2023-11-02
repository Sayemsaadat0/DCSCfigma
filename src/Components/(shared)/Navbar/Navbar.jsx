

"use client"
import { useState } from "react";
import Buttons from "../Buttons/Buttons";
import Link from "next/link";
import Image from "next/image";
import logo from '../../../../public/logo.png'
import { useRouter } from "next/navigation";


const Navbar = () => {
    const [navbar, setNavbar] = useState(false);


    const isRouteActive = (path) => {
        const router = useRouter();
        return router.pathname === path ? "active-link" : "";
    };
    console.log(isRouteActive);
    return (
        <nav className="w-full  md:mt-10 mt-0 z-10  absolute ">
            <div className="justify-between backdrop-blur-md px-4 mx-auto lg:max-w-[1366px] md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 lg:block">
                        <Link href="/">
                            <Image width={90} height={120} alt="logo" src={logo}></Image>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1  justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}   >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6  md:space-y-0">
                            <li className={`text-white hover:text-indigo-300 ${isRouteActive("/")}`}>
                                <Link href="/">Home</Link>
                            </li>
                            <li className={`text-white hover:text-indigo-300 ${isRouteActive("/allevent")}`}>
                                <Link href="/allevent">All Event</Link>
                            </li>
                            <li className={`text-white hover:text-indigo-300 ${isRouteActive("/committee")}`}>
                                <Link href="/committee">Committee</Link>
                            </li>
                            <li className={`text-white hover:text-indigo-300 ${isRouteActive("/gallery")}`}>
                                <Link href="/gallery">Gallery</Link>
                            </li>

                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                            <Buttons text={'Ongoing event'}></Buttons>
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 lg:flex whitespace-nowrap">
                    <Buttons text={'Ongoing event'}></Buttons>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;