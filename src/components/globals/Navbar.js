import React from "react";
import { Sidebar } from "./Sidebar";


// Define component
export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-3 md:p-5 font-poppins max-w-[1920px] mx-auto absolute top-0 left-0 w-full z-30">
            <a href="#" className="text-white rounded-sm font-extrabold text-3xl lg:text-4xl">
                <i className="fa-solid fa-dumbbell"></i> FITT
            </a>
            <ul className="gap-5 lg:gap-10 hidden md:flex font-semibold text-white">
                <li><a href="#" className="hover:text-lime-500">Home</a></li>
                <li><a href="#" className="hover:text-lime-500">Classes</a></li>
                <li><a href="#" className="hover:text-lime-500">Trainers</a></li>
                <li><a href="#" className="hover:text-lime-500">Pricing</a></li>
                <li><a href="#" className="hover:text-lime-500">About</a></li>
                <li><a href="#" className="hover:text-lime-500">Contact</a></li>
                <li>
                    <a href="#" className="px-5 py-3 rounded-sm bg-lime-400 hover:bg-lime-300 font-semibold text-black">
                        Join Now
                    </a>
                </li>
            </ul>
            <Sidebar />
        </nav>
    )
}