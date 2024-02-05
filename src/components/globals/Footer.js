import React from "react";
import { Link } from "react-router-dom";


// Define component
export const Footer = () => {
    return (
        <section className="bg-black bg-opacity-95 text-white font-poppins">
            <div className="container mx-auto px-2 lg:px-20 xl:px-40 py-10 lg:py-20">
                <div className="flex flex-wrap gap-10 justify-around md:justify-between">
                    {/* Brand */}
                    <div className="w-full text-center md:text-start md:w-auto">
                        <a href="#" className="block text-white rounded-sm font-extrabold text-3xl lg:text-4xl mb-3">
                            <i className="fa-solid fa-dumbbell"></i> FITT
                        </a>
                        <p className="text-gray-200 mb-3 text-sm lg:text-base">Join today to get in the best shape of your life.</p>
                        <ul className="flex gap-2 *:text-gray-200 text-sm lg:text-base w-fit mx-auto md:mx-0 mb-5">
                            <li>
                                <a href="#" className="w-8 h-8 flex justify-center items-center rounded-full border border-white bg-transparent hover:bg-white hover:text-black transition-colors"><i className="fa-brands fa-x-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#" className="w-8 h-8 flex justify-center items-center rounded-full border border-white bg-transparent hover:bg-white hover:text-black transition-colors"><i className="fa-brands fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href="#" className="w-8 h-8 flex justify-center items-center rounded-full border border-white bg-transparent hover:bg-white hover:text-black transition-colors"><i className="fa-brands fa-instagram"></i></a>
                            </li>
                        </ul>
                        <p className="text-xs lg:text-sm text-gray-100 font-light">Design inspired by: 
                            <a href="https://www.figma.com/@victorflow" className="underline hover:text-lime-400 transition-colors ms-1" target="_blank" rel="noreferrer">VictorFlow</a> &
                            <a href="https://www.figma.com/@jakhongirovv" className="underline hover:text-lime-400 transition-colors ms-1" target="_blank" rel="noreferrer">jakhongirovv</a>
                        </p>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h2 className="sm:text-lg font-bold mb-3">Quick Links</h2>
                        <ul className="*:mb-2 *:text-gray-200 text-sm lg:text-base">
                            <li><Link to={"/"} className="hover:text-lime-400 transition-colors">Home</Link></li>
                            <li><Link to={"/"} className="hover:text-lime-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link to={"/about"} className="hover:text-lime-400 transition-colors">About Us</Link></li>
                            <li><Link to={"/contact"} className="hover:text-lime-400 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>
                    {/* Services */}
                    <div>
                        <h2 className="sm:text-lg font-bold mb-3">Services</h2>
                        <ul className="*:mb-2 *:text-gray-200 text-sm lg:text-base">
                            <li><Link to={"/"} className="hover:text-lime-400 transition-colors">Join Us</Link></li>
                            <li><Link to={"/"} className="hover:text-lime-400 transition-colors">Community</Link></li>
                            <li><Link to={"/pricing"} className="hover:text-lime-400 transition-colors">Pricing</Link></li>
                            <li><Link to={"/"} className="hover:text-lime-400 transition-colors">Portfolio</Link></li>
                        </ul>
                    </div>
                    {/* FAQs */}
                    <div>
                        <h2 className="sm:text-lg font-bold mb-3">FAQ</h2>
                        <ul className="*:mb-2 *:text-gray-200 text-sm lg:text-base">
                            <li><Link to={"/"} className="hover:text-lime-400 transition-colors">Schedule</Link></li>
                            <li><Link to={"/"} className="hover:text-lime-400 transition-colors">Payment</Link></li>
                            <li><Link to={"/"} className="hover:text-lime-400 transition-colors">Rules</Link></li>
                            <li><Link to={"/"} className="hover:text-lime-400 transition-colors">Ask Now</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center text-sm py-2 text-gray-200 font-light">
                &copy; 2024, FITT Fitness and Health Gym
            </div>
        </section>
    )
}