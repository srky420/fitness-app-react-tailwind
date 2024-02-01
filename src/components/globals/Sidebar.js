import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';


// Define component
export const Sidebar = () => {

  const [navToggle, setNavToggle] = useState(false);

  return (
    <nav className="block md:hidden">
        {/* Burger */}
        <button className="text-2xl font-bold text-white" onClick={() => setNavToggle(true)}>
            <i className="fa-solid fa-bars"></i>
        </button>

        {/* Sidebar */}
        <div 
          className={navToggle ? "fixed top-0 left-0 z-40 bg-gray-100 transition-transform shadow-md h-screen w-screen overflow-auto" : 
                                 "fixed top-0 left-0 z-40 bg-gray-100 transition-transform shadow-md h-screen w-screen overflow-auto translate-x-full"}>
            {/* Sidebar btns */}
            <div className="flex justify-between m-3">
                <a className="px-3 py-2 rounded-sm bg-lime-400 bg-opacity-75 hover:bg-lime-300 font-semibold">
                    Join Now
                </a>
                <button className="text-2xl" onClick={() => setNavToggle(false)}>
                    <i className="fa-solid fa-close"></i>
                </button>
            </div>
            {/* Sidebar links */}
            <ul className="*:mb-8 text-center flex flex-col text-xl justify-center items-center my-10 font-semibold">
                <li><NavLink to={"/"} className="hover:text-lime-500" onClick={() => setNavToggle(false)}>Home</NavLink></li>
                <li><NavLink to={"/programs"} className="hover:text-lime-500" onClick={() => setNavToggle(false)}>Programs</NavLink></li>
                <li><NavLink to={"/trainers"} className="hover:text-lime-500" onClick={() => setNavToggle(false)}>Trainers</NavLink></li>
                <li><NavLink to={"/pricing"} className="hover:text-lime-500" onClick={() => setNavToggle(false)}>Pricing</NavLink></li>
                <li><NavLink to={"/about"} className="hover:text-lime-500" onClick={() => setNavToggle(false)}>About</NavLink></li>
                <li><NavLink to={"/contact"} className="hover:text-lime-500" onClick={() => setNavToggle(false)}>Contact</NavLink></li>
            </ul>
        </div>
    </nav>
  )
}
