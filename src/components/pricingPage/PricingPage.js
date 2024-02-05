import React, { useEffect } from "react";
import { Link } from "react-router-dom";


// Define component
export const PricingPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <section className="font-poppins">
            <div className="w-full h-40 sm:h-60 lg:h-80 relative">
                <img src="./img/hero-img.jpg" alt="hero-img" className="block w-full h-full object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <h1 className="text-4xl xs:text-5xl lg:text-6xl xl:text-7xl mt-5 sm:mt-10 font-bold text-white">Pricing</h1>
                </div>
            </div>
            <div className="container mx-auto font-poppins px-2 lg:px-20 xl:px-40 mt-5 lg:mt-10">
                {/* Breadcrumb */}
                <div className="flex gap-2 text-sm lg:text-base mb-5 lg:mb-10">
                    <Link to={"/"} className="hover:text-lime-500">Home</Link>
                    &gt;
                    <p>Pricing</p>
                </div>
                {/* Header */}
                <div className="mb-5 lg:mb-10">
                    <p className="lg:text-xl border-s-4 text-blue-600 border-blue-600 ps-2 font-semibold sm:mb-1">Pricing</p>
                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">Our Packages</h2>
                </div>
            </div>
            <div className="mb-20 lg:mb-40 overflow-auto">
                {/* Pricing */}
                <div className="container mx-auto font-poppins lg:px-20 xl:px-40">
                    <div className="grid grid-cols-3 gap-2 xl:gap-5 overflow-visible w-max md:w-full px-2 lg:px-0">
                        {/* Basic */}
                        <div className="border rounded-md p-3 md:p-5 w-full bg-gray-50">
                            <div className="text-center border-b pb-3 mb-3 sm:mb-5">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-blue-600">Basic</h2>
                                <h2 className="text-3xl lg:text-5xl font-semibold">$10 <span className="text-base lg:text-xl">/ Month</span></h2>
                            </div>
                            <ul className="*:my-2 *:flex *:gap-1 text-xs sm:text-sm lg:text-base pb-3 mb-3 border-b">
                                <li><i className="fa-solid fa-circle-check text-green-500 mt-0.5 sm:mt-1"></i> Access to Gym</li>
                                <li><i className="fa-solid fa-circle-check text-green-500 mt-0.5 sm:mt-1"></i> Access to any 2 Programs</li>
                                <li><i className="fa-solid fa-circle-check text-green-500 mt-0.5 sm:mt-1"></i> Access to Personal Locker</li>
                                <li><i className="fa-solid fa-circle-xmark text-red-500 mt-0.5 sm:mt-1"></i> Access to All Programs</li>
                                <li><i className="fa-solid fa-circle-xmark text-red-500 mt-0.5 sm:mt-1"></i> Access to Sauna</li>
                                <li><i className="fa-solid fa-circle-xmark text-red-500 mt-0.5 sm:mt-1"></i> Access to Pool</li>
                                <li><i className="fa-solid fa-circle-xmark text-red-500 mt-0.5 sm:mt-1"></i> Coach Assistance</li>
                            </ul>
                            <Link to={"/join"} className="block mx-auto w-fit px-3 py-2 lg:px-4 lg:py-3 border-2 border-black hover:bg-lime-400 hover:border-lime-400 rounded-sm lg:text-lg font-semibold mt-5 transition-colors">
                                Get Started <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                        {/* Standard */}
                        <div className="border rounded-md p-2 md:p-5 w-full bg-gray-50">
                            <div className="text-center border-b pb-3 mb-3 sm:mb-5">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-lime-600">Standard</h2>
                                <h2 className="text-3xl lg:text-5xl font-semibold">$30 <span className="text-base lg:text-xl">/ Month</span></h2>
                            </div>
                            <ul className="*:my-2 *:flex *:gap-1 text-xs sm:text-sm lg:text-base pb-3 mb-3 border-b">
                                <li className="font-semibold"><i className="fa-solid fa-circle-check text-green-500 mt-0.5 sm:mt-1"></i> First Week Free Trial</li>
                                <li><i className="fa-solid fa-circle-check text-green-500 mt-0.5 sm:mt-1"></i> Access to Gym</li>
                                <li><i className="fa-solid fa-circle-check text-green-500 mt-0.5 sm:mt-1"></i> Access to Personal Locker</li>
                                <li><i className="fa-solid fa-circle-check text-green-500 mt-0.5 sm:mt-1"></i> Access to All Programs</li>
                                <li><i className="fa-solid fa-circle-check text-green-500 mt-0.5 sm:mt-1"></i> Access to Sauna</li>
                                <li><i className="fa-solid fa-circle-xmark text-red-500 mt-0.5 sm:mt-1"></i> Access to Pool</li>
                                <li><i className="fa-solid fa-circle-xmark text-red-500 mt-0.5 sm:mt-1"></i> Coach Assistance</li>
                            </ul>
                            <Link to={"/join"} className="block mx-auto w-fit px-3 py-2 lg:px-4 lg:py-3 border-2 border-black hover:bg-lime-400 hover:border-lime-400 rounded-sm lg:text-lg font-semibold mt-5 transition-colors">
                                Get Started <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                        {/* Premium */}
                        <div className="border rounded-md p-2 md:p-5 w-full bg-gray-50">
                            <div className="text-center border-b pb-3 mb-3 sm:mb-5">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
                                    <span className="bg-gradient-to-r from-blue-500 to-lime-500 bg-clip-text text-transparent">Premium</span>
                                </h2>
                                <h2 className="text-3xl lg:text-5xl font-semibold">$50 <span className="text-base lg:text-xl">/ Month</span></h2>
                            </div>
                            <ul className="*:my-2 *:flex *:gap-1 text-xs sm:text-sm lg:text-base pb-3 mb-3 border-b">
                                <li className="font-semibold"><i className="fa-solid fa-circle-check text-green-500 mt-0.5 sm:mt-1"></i> First Month Free Trial</li>
                                <li><i className="fa-solid fa-circle-check text-green-500 mt-0.5 sm:mt-1"></i> Access to Gym</li>
                                <li><i className="fa-solid fa-circle-check text-green-500 mt-0.5 sm:mt-1"></i> Access to Personal Locker</li>
                                <li><i className="fa-solid fa-circle-check text-green-500 mt-0.5 sm:mt-1"></i> Access to All Programs</li>
                                <li><i className="fa-solid fa-circle-check text-green-500 mt-0.5 sm:mt-1"></i> Access to Sauna</li>
                                <li><i className="fa-solid fa-circle-check text-green-500 mt-0.5 sm:mt-1"></i> Access to Pool</li>
                                <li><i className="fa-solid fa-circle-check text-green-500 mt-0.5 sm:mt-1"></i> Coach Assistance</li>
                            </ul>
                            <Link to={"/join"} className="block mx-auto w-fit px-3 py-2 lg:px-4 lg:py-3 border-2 border-black hover:bg-lime-400 hover:border-lime-400 rounded-sm lg:text-lg font-semibold mt-5 transition-colors">
                                Get Started <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>  
            </div>
        </section>
    )
}