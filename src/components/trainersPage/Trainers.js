import React, { useEffect } from "react";
import { TrainerCard } from "../globals/TrainerCard";
import { trainers } from "../data/trainers";
import { Link } from "react-router-dom";


// Define component
export const Trainers = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <section className="font-poppins">
            <div className="w-full h-40 sm:h-60 lg:h-80 relative">
                <img src="./img/hero-img.jpg" alt="hero-img" className="block w-full h-full object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <h1 className="text-4xl xs:text-5xl lg:text-6xl xl:text-7xl mt-5 sm:mt-10 font-bold text-white">Trainers</h1>
                </div>
            </div>
            <div className="container mx-auto font-poppins px-2 lg:px-20 xl:px-40 mt-5 lg:mt-10 mb-20 lg:mb-40">
                {/* Breadcrumb */}
                <div className="flex gap-2 text-sm lg:text-base mb-5 lg:mb-10">
                    <Link to={"/"} className="hover:text-lime-500">Home</Link>
                    &gt;
                    <p>Trainers</p>
                </div>
                {/* Trainer cards */}
                <div className="h-full">
                    <div className="mb-5 lg:mb-10">
                        <p className="lg:text-xl border-s-4 text-blue-600 border-blue-600 ps-2 font-semibold sm:mb-1">Browse</p>
                        <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">All Trainers</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:gap-5">
                        {trainers.map((item, index) => (
                            <TrainerCard data={item} key={"program" + index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}