import React from "react";


// Define component
export const Footer = () => {
    return (
        <section className="bg-black bg-opacity-90 text-white">
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
                            <li><a href="#" target="_blank" rel="noreferrer" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" target="_blank" rel="noreferrer" className="hover:text-white">About Us</a></li>
                            <li><a href="#" target="_blank" rel="noreferrer" className="hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>
                    {/* Services */}
                    <div>
                        <h2 className="sm:text-lg font-bold mb-3">Services</h2>
                        <ul className="*:mb-2 *:text-gray-200 text-sm lg:text-base">
                            <li><a href="#" target="_blank" rel="noreferrer" className="hover:text-white">Community</a></li>
                            <li><a href="#" target="_blank" rel="noreferrer" className="hover:text-white">Pricing</a></li>
                            <li><a href="#" target="_blank" rel="noreferrer" className="hover:text-white">Portfolio</a></li>
                        </ul>
                    </div>
                    {/* FAQs */}
                    <div>
                        <h2 className="sm:text-lg font-bold mb-3">FAQ</h2>
                        <ul className="*:mb-2 *:text-gray-200 text-sm lg:text-base">
                            <li><a href="#" target="_blank" rel="noreferrer" className="hover:text-white">Payment</a></li>
                            <li><a href="#" target="_blank" rel="noreferrer" className="hover:text-white">Rules</a></li>
                            <li><a href="#" target="_blank" rel="noreferrer" className="hover:text-white">Ask Now</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}