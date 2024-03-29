import React from "react";
import { Link } from "react-router-dom";


// Define component
export const Pricing = () => {
    return (
        <section className="my-10 lg:my-20">
            <div className="container mx-auto font-poppins px-2 lg:px-20 xl:px-40 mt-5 lg:mt-10">
                {/* Header */}
                <div className="mb-5 lg:mb-10">
                    <p className="lg:text-xl border-s-4 text-blue-600 border-blue-600 ps-2 font-semibold sm:mb-1">Pricing</p>
                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">Our Packages</h2>
                </div>
            </div>
            {/* Pricing */}
            <div className="overflow-auto">
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