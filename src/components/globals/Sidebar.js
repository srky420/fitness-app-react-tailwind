import React, { useState } from 'react'


// Define component
export const Sidebar = () => {

  const [navToggle, setNavToggle] = useState(false);

  return (
    <nav className="block md:hidden">
        {/* Burger */}
        <button className="text-2xl font-bold" onClick={() => setNavToggle(true)}>
            <i className="fa-solid fa-bars"></i>
        </button>

        {/* Sidebar */}
        <div 
          className={navToggle ? "fixed top-0 left-0 z-40 bg-gray-100 transition-transform shadow-md h-screen w-screen overflow-auto" : 
                                 "fixed top-0 left-0 z-40 bg-gray-100 transition-transform shadow-md h-screen w-screen overflow-auto translate-x-full"}>
            {/* Sidebar btns */}
            <div className="flex justify-between m-3">
                <a className="px-3 py-2 rounded-sm bg-lime-400 bg-opacity-75 hover:bg-lime-300">
                    Join Now
                </a>
                <button className="text-2xl" onClick={() => setNavToggle(false)}>
                    <i className="fa-solid fa-close"></i>
                </button>
            </div>
            {/* Sidebar links */}
            <ul className="*:mb-8 text-center flex flex-col text-xl justify-center items-center my-10">
                <li><a href="#" className="hover:text-lime-500">Home</a></li>
                <li><a href="#" className="hover:text-lime-500">Classes</a></li>
                <li><a href="#" className="hover:text-lime-500">Trainers</a></li>
                <li><a href="#" className="hover:text-lime-500">Pricing</a></li>
                <li><a href="#" className="hover:text-lime-500">About</a></li>
                <li><a href="#" className="hover:text-lime-500">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}
