import React from "react";
import { Link } from "react-router-dom";
import { about } from "../data/about";


// Define component
export const JoinNow = () => {
    return (
        <section className="font-poppins">
            <div className="w-full h-40 sm:h-60 lg:h-80 relative">
                <img src="./img/hero-img.jpg" alt="hero-img" className="block w-full h-full object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <h1 className="text-4xl xs:text-5xl lg:text-6xl xl:text-7xl mt-5 sm:mt-10 font-bold text-white">Join Now</h1>
                </div>
            </div>
            <div className="container mx-auto font-poppins px-2 lg:px-20 xl:px-40 mt-5 lg:mt-10 mb-20 lg:mb-40">
                {/* Breadcrumb */}
                <div className="flex gap-2 text-sm lg:text-base mb-5 lg:mb-10">
                    <Link to={"/"} className="hover:text-lime-500">Home</Link>
                    &gt;
                    <p>Joining Form</p>
                </div>
                {/* Header */}
                <div className="mb-2 lg:mb-5">
                    <p className="lg:text-xl border-s-4 text-blue-600 border-blue-600 ps-2 font-semibold sm:mb-1">Send Your Form</p>
                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">Join Us Today</h2>
                </div>
                <p className="text-xs sm:text-sm lg:text-base mb-5 lg:mb-10">{about.cta}</p>
                {/* Joining form */}
                <form className="grid grid-cols-2 py-5 p-3 xs:p-5 sm:p-10 bg-gray-50 rounded-sm gap-2 lg:gap-5 w-full text-xs sm:text-sm 2xl:text-base">
                    {/* Personal info */}
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold col-span-2">Personal Info</h2>
                    <input type="text" className="outline-none border rounded-md p-3 focus:border-lime-400" placeholder="First Name..." />
                    <input type="text" className="outline-none border rounded-md p-3 focus:border-lime-400" placeholder="Last Name..." />
                    <input type="email" className="outline-none border rounded-md p-3 focus:border-lime-400" placeholder="Email Address..." />
                    <input type="text" className="outline-none border rounded-md p-3 focus:border-lime-400" placeholder="Phone Number..." />
                    <textarea className="outline-none border rounded-md p-3 resize-none focus:border-lime-400 col-span-2" rows={5} placeholder="Address..."></textarea>
                    <hr className="col-span-2" />
                    {/* Price packages */}
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold col-span-2">Price Package</h2>
                    <div className="grid grid-cols-3 gap-1 sm:gap-2 col-span-2">
                        <div className="w-full h-full">
                            <input type="radio" className="hidden peer" id="basic" name="package" />
                            <label className="block w-full h-full p-2 sm:p-5 border-2 rounded-md hover:cursor-pointer group peer-checked:border-lime-500 text-center hover:bg-white" for="basic">
                                <h2 className="text-base xs:text-xl sm:text-2xl lg:text-4xl font-bold mb-3 text-blue-600">Basic</h2>
                                <h2 className="text-2xl lg:text-3xl font-semibold">$10 <span className="text-base xs:text-lg lg:text-xl">/ Month</span></h2>
                            </label>
                        </div>
                        <div className="w-full">
                            <input type="radio" className="hidden peer" id="standard" name="package" />
                            <label className="block w-full h-full p-2 sm:p-5 border-2 rounded-md hover:cursor-pointer group peer-checked:border-lime-500 text-center hover:bg-white" for="standard">
                                <h2 className="text-base xs:text-xl sm:text-2xl lg:text-4xl font-bold mb-3 text-lime-500">Standard</h2>
                                <h2 className="text-2xl lg:text-3xl font-semibold">$30 <span className="text-base xs:text-lg lg:text-xl">/ Month</span></h2>
                            </label>
                        </div>
                        <div className="w-full">
                            <input type="radio" className="hidden peer" id="premium" name="package" />
                            <label className="block w-full h-full p-2 sm:p-5 border-2 rounded-md hover:cursor-pointer group peer-checked:border-lime-500 text-center hover:bg-white" for="premium">
                                <h2 className="text-base xs:text-xl sm:text-2xl lg:text-4xl font-bold mb-3">
                                    <span className="bg-gradient-to-r from-blue-500 to-lime-500 bg-clip-text text-transparent">Premium</span>
                                </h2>
                                <h2 className="text-2xl lg:text-3xl font-semibold">$50 <span className="text-base xs:text-lg lg:text-xl">/ Month</span></h2>
                            </label>
                        </div>
                    </div>
                    <textarea className="outline-none border rounded-md p-3 resize-none focus:border-lime-400 col-span-2" rows={5} placeholder="Other details..."></textarea>
                    <hr className="col-span-2" />
                    <button
                        className="ms-auto w-fit col-span-2 px-3 lg:px-4 py-2 lg:py-3 my-1 border-2 rounded-md lg:text-lg font-semibold bg-white text-black hover:border-lime-400 hover:bg-lime-400">
                        Join Now <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </form>
            </div>
        </section>
    )
}