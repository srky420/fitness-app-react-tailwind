import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { contact } from "../data/contact";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


// Define component
export const ContactPage = () => {

    return (
        <section className="font-poppins">
            <div className="w-full h-40 sm:h-60 lg:h-80 relative">
                <img src="./img/hero-img.jpg" alt="hero-img" className="block w-full h-full object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <h1 className="text-4xl xs:text-5xl lg:text-6xl xl:text-7xl mt-5 sm:mt-10 font-bold text-white">Contact Us</h1>
                </div>
            </div>
            <div className="container mx-auto font-poppins px-2 lg:px-20 xl:px-40 mt-5 lg:mt-10 mb-20 lg:mb-40">
                {/* Breadcrumb */}
                <div className="flex gap-2 text-sm lg:text-base mb-5 lg:mb-10">
                    <Link to={"/"} className="hover:text-lime-500">Home</Link>
                    &gt;
                    <p>Contact Us</p>
                </div>
                {/* Contact Info */}
                <div className="mb-5 lg:mb-10 flex flex-col md:flex-row gap-10 justify-between">
                    <div className="flex flex-col gap-2 w-full text-sm 2xl:text-base">
                        {/* Header */}
                        <div className="mb-2 lg:mb-5">
                            <p className="lg:text-xl border-s-4 text-blue-600 border-blue-600 ps-2 font-semibold sm:mb-1">Reach Out</p>
                            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">Get in Touch</h2>
                        </div>
                        {/* Opening hours */}
                        <div className="mb-3">
                            {contact.description}
                        </div>
                        <div className="flex gap-2">
                            <i className="fa-solid fa-location-dot text-lg"></i>
                            <p>{contact.address}</p>
                        </div>
                        <div className="flex gap-2">
                            <i className="fa-solid fa-phone text-lg"></i>
                            <p>{contact.phone}</p>
                        </div>
                        <div className="flex gap-2 mb-3">
                            <i className="fa-solid fa-envelope text-lg"></i>
                            <p>{contact.email}</p>
                        </div>
                        <hr />
                        {/* Socials */}
                        <div className="flex gap-2 pt-5 items-center w-fit mx-auto md:mx-0">
                            <p className="font-bold me-1">Socials:</p>
                            <ul className="flex gap-2 text-sm lg:text-base">
                                <li>
                                    <a href="#" className="w-8 h-8 flex justify-center items-center rounded-full border hover:bg-black hover:text-white"><i className="fa-brands fa-x-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#" className="w-8 h-8 flex justify-center items-center rounded-full border hover:bg-black hover:text-white"><i className="fa-brands fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#" className="w-8 h-8 flex justify-center items-center rounded-full border hover:bg-black hover:text-white"><i className="fa-brands fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Send Message */}
                    <form className="grid grid-cols-2 p-5 xs:p-10 bg-gray-50 rounded-sm gap-2 lg:gap-5 w-full text-sm 2xl:text-base">
                        <h2 className="text-xl sm:text-2xl 2xl:text-4xl font-bold col-span-2">Leave Us a Message</h2>
                        <input type="text" className="outline-none border rounded-md p-3" placeholder="Full Name..." />
                        <input type="email" className="outline-none border rounded-md p-3" placeholder="Email Address..." />
                        <textarea className="outline-none border rounded-md p-3 resize-none col-span-2" rows={10} placeholder="Message..."></textarea>
                        <button
                            className="col-span-2 px-3 lg:px-4 py-2 lg:py-3 border-2 rounded-md lg:text-lg font-semibold bg-white text-black hover:border-lime-400 hover:bg-lime-400">
                            Send Message <i className="fa-solid fa-paper-plane ms-1"></i>
                        </button>
                    </form>
                </div>
            </div>
            <div className="w-full h-60 sm:h-80 lg:h-96">
                <MapContainer center={[51.505, -0.09]} zoom={15} scrollWheelZoom={false} style={{ height: '100%' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup className="font-poppins font-bold">
                            FITT Fitness and Health Gym
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </section>
    )
}