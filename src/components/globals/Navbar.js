import React, { useEffect, useRef, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Link, NavLink } from "react-router-dom";


// Define component
export const Navbar = () => {

    const navbar = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', switchDynamicNav);
        
        // Clean up
        return () => window.removeEventListener('scroll', switchDynamicNav);
    }, [])

    const switchDynamicNav = () => {
        if (window.scrollY > navbar.current.getBoundingClientRect().height) {
            navbar.current.classList.remove('absolute');
            navbar.current.classList.add('fixed', 'bg-black', 'shadow-md');
        }
        else {
            navbar.current.classList.add('absolute');
            navbar.current.classList.remove('fixed', 'bg-black', 'shadow-md');
        }
    }

    return (
        <nav className="flex justify-between items-center p-3 md:p-5 font-poppins mx-auto absolute top-0 left-0 right-0 w-full z-30 bg-opacity-95" ref={navbar}>
            <Link to={"/"} className="text-white rounded-sm font-extrabold text-3xl lg:text-4xl">
                <i className="fa-solid fa-dumbbell"></i> FITT
            </Link>
            <ul className="gap-5 lg:gap-10 hidden md:flex font-semibold text-white">
                <li><NavLink to={"/"} className="hover:text-lime-500">Home</NavLink></li>
                <li><NavLink to={"/programs"} className="hover:text-lime-500">Programs</NavLink></li>
                <li><NavLink to={"/trainers"} className="hover:text-lime-500">Trainers</NavLink></li>
                <li><NavLink to={"/pricing"} className="hover:text-lime-500">Pricing</NavLink></li>
                <li><NavLink to={"/about"} className="hover:text-lime-500">About</NavLink></li>
                <li><NavLink to={"/contact"} className="hover:text-lime-500">Contact</NavLink></li>
                <li>
                    <Link to={"/join"} className="px-5 py-3 rounded-sm bg-lime-400 hover:bg-lime-300 font-semibold text-black">
                        Join Now
                    </Link>
                </li>
            </ul>
            <Sidebar />
        </nav>
    )
}