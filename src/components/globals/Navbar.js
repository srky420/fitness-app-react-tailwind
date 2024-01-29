import React from "react";
import { Sidebar } from "./Sidebar";


// Define component
export const Navbar = () => {
    return (
        <nav className="flex justify-between p-3 md:p-5 font-poppins max-w-[1920px] mx-auto">
            <div className="text-2xl font-bold">
                <a href="#" className="flex gap-2 lg:gap-5 items-center">
                    <span className="w-12 h-12 flex justify-center items-center rounded-full bg-lime-400"><i className="fa-solid fa-dumbbell"></i></span> FITT
                </a>
            </div>
            <div className="flex items-center gap-5 lg:gap-10 font-semibold">
                <ul className="gap-5 lg:gap-10 hidden md:flex">
                    <li><a href="#" className="hover:text-lime-500">Home</a></li>
                    <li><a href="#" className="hover:text-lime-500">Classes</a></li>
                    <li><a href="#" className="hover:text-lime-500">Trainers</a></li>
                    <li><a href="#" className="hover:text-lime-500">Pricing</a></li>
                    <li><a href="#" className="hover:text-lime-500">About</a></li>
                    <li><a href="#" className="hover:text-lime-500">Contact</a></li>
                    <li>
                        <a href="#" className="px-5 py-3 border rounded-sm bg-lime-400 hover:bg-lime-300">
                            Join Now
                        </a>
                    </li>
                </ul>
                <Sidebar />
            </div>
        </nav>
    )
}