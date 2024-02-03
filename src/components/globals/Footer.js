import React from "react";
import { Link } from "react-router-dom";


// Define component
export const Footer = () => {
    return (
        <section className="bg-black bg-opacity-95 text-white">
            <div className="container mx-auto font-poppins px-2 lg:px-20 xl:px-40 py-10 lg:py-20">
                <div className="flex flex-wrap gap-10 justify-around md:justify-between">
                    {/* Brand */}
                    <div className="w-full text-center md:text-start md:w-auto">
                        <a href="#" className="block text-white rounded-sm font-extrabold text-3xl lg:text-4xl mb-3">
                            <i className="fa-solid fa-dumbbell"></i> FITT
                        </a>
                        <p className="text-gray-200 mb-3 text-sm lg:text-base">Join today to get in the best shape of your life.</p>
                        <ul className="flex gap-2 *:text-gray-200 text-sm lg:text-base w-fit mx-auto md:mx-0">
                            <li>
                                <a href="#" className="w-8 h-8 flex justify-center items-center rounded-full border border-white bg-transparent hover:bg-white hover:text-black"><i className="fa-brands fa-x-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#" className="w-8 h-8 flex justify-center items-center rounded-full border border-white bg-transparent hover:bg-white hover:text-black"><i className="fa-brands fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href="#" className="w-8 h-8 flex justify-center items-center rounded-full border border-white bg-transparent hover:bg-white hover:text-black"><i className="fa-brands fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h2 className="sm:text-lg font-bold mb-3">Quick Links</h2>
                        <ul className="*:mb-2 *:text-gray-200 text-sm lg:text-base">
                            <li><Link to={"/"} className="hover:text-lime-400">Home</Link></li>
                            <li><Link to={"/"} className="hover:text-lime-400">Privacy Policy</Link></li>
                            <li><Link to={"/about"} className="hover:text-lime-400">About Us</Link></li>
                            <li><Link to={"/contact"} className="hover:text-lime-400">Contact Us</Link></li>
                        </ul>
                    </div>
                    {/* Services */}
                    <div>
                        <h2 className="sm:text-lg font-bold mb-3">Services</h2>
                        <ul className="*:mb-2 *:text-gray-200 text-sm lg:text-base">
                            <li><Link to={"/"} className="hover:text-lime-400">Join Us</Link></li>
                            <li><Link to={"/"} className="hover:text-lime-400">Community</Link></li>
                            <li><Link to={"/pricing"} className="hover:text-lime-400">Pricing</Link></li>
                            <li><Link to={"/"} className="hover:text-lime-400">Portfolio</Link></li>
                        </ul>
                    </div>
                    {/* FAQs */}
                    <div>
                        <h2 className="sm:text-lg font-bold mb-3">FAQ</h2>
                        <ul className="*:mb-2 *:text-gray-200 text-sm lg:text-base">
                            <li><Link to={"/"} className="hover:text-lime-400">Schedule</Link></li>
                            <li><Link to={"/"} className="hover:text-lime-400">Payment</Link></li>
                            <li><Link to={"/"} className="hover:text-lime-400">Rules</Link></li>
                            <li><Link to={"/"} className="hover:text-lime-400">Ask Now</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}