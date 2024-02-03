import React, { useEffect } from "react";
import { trainers } from "../data/trainers";
import { Link, useParams } from "react-router-dom";


// Define component
export const Trainer = () => {

    const { trainerId } = useParams();

    const data = trainers.find((item, index) => item.id === parseInt(trainerId))

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <section className="font-poppins">
            <div className="w-full h-40 sm:h-60 lg:h-80 relative">
                <img src="/img/hero-img.jpg" alt="hero-img" className="block w-full h-full object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <h1 className="text-3xl xs:text-4xl lg:text-5xl xl:text-6xl mt-5 sm:mt-10 font-bold text-white">{data.title}</h1>
                </div>
            </div>
            <div className="container mx-auto font-poppins px-2 lg:px-20 xl:px-40 mt-5 lg:mt-10 mb-20 lg:mb-40">
                {/* Breadcrumb */}
                <div className="flex gap-2 text-sm lg:text-base mb-5 lg:mb-10">
                    <Link to={"/"} className="hover:text-lime-500">Home</Link>
                    &gt;
                    <p>Trainers</p>
                </div>
                
            </div>
        </section>
    )
}