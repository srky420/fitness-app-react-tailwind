import React from "react";
import { Link } from "react-router-dom";
import { about } from "../data/about";


// Define component
export const AboutUs = () => {
    return (
        <section className="font-poppins">
            <div className="w-full h-40 sm:h-60 lg:h-80 relative">
                <img src="./img/hero-img.jpg" alt="hero-img" className="block w-full h-full object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <h1 className="text-4xl xs:text-5xl lg:text-6xl xl:text-7xl mt-5 sm:mt-10 font-bold text-white">About Us</h1>
                </div>
            </div>
            <div className="container mx-auto font-poppins px-2 lg:px-20 xl:px-40 mt-5 lg:mt-10 mb-20 lg:mb-40">
                {/* Breadcrumb */}
                <div className="flex gap-2 text-sm lg:text-base mb-5 lg:mb-10">
                    <Link to={"/"} className="hover:text-lime-500">Home</Link>
                    &gt;
                    <p>About Us</p>
                </div>
                {/* Header */}
                <div className="mb-5 lg:mb-10">
                    <p className="lg:text-xl border-s-4 text-blue-600 border-blue-600 ps-2 font-semibold sm:mb-1">Our Story</p>
                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">Welcome to FITT</h2>
                </div>
                {/* Story and Mission */}
                <div className="flex flex-col md:flex-row md:h-96 gap-5 md:gap-10 justify-between mb-10 lg:mb-20">
                    <div className="text-sm lg:text-base w-full flex flex-col">
                        <p className="mb-5">{about.description}</p>
                        <div className="px-5 2xl:px-10 bg-lime-400 rounded-sm mt-auto h-full flex flex-col justify-center py-5 relative">
                            <h2 className="text-lg sm:text-2xl font-bold mb-1">Our Mission</h2>
                            <p className="text-sm sm:text-base">{about.missionStatement}</p>
                            <div className="absolute top-0 left-1 text-2xl 2xl:text-4xl">
                                <i className="fa-solid fa-quote-left"></i>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-44 md:h-full rounded-sm relative">
                        <img src="./img/about-img.jpg" alt="about-img" className="w-full h-full object-cover rounded-sm" />
                        <Link to={"/join"}
                            className="absolute bottom-5 right-5 px-4 lg:px-6 py-3 lg:py-4 bg-blue-500 hover:bg-blue-400 rounded-sm lg:text-xl font-semibold text-black me-2">
                            Get Started <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>

                {/* Header */}
                <div className="mb-5 lg:mb-10">
                    <p className="lg:text-xl border-s-4 text-blue-600 border-blue-600 ps-2 font-semibold sm:mb-1">Our Services</p>
                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">Why Choose Us?</h2>
                </div>
                {/* Why choose us */}
                <div className="grid sm:grid-cols-2 gap-5 lg:gap-10 p-5 sm:p-10 lg:p-20 bg-black bg-opacity-90 text-white font-light">
                    {about.whyChooseUs.map((item, index) => (
                        <div className="text-xs lg:text-sm flex gap-5" key={"chooseUs" + index}>
                            <i className="fa-solid fa-braille text-xl lg:text-2xl"></i>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}