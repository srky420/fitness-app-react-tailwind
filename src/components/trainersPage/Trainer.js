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
            <div className="container mx-auto font-poppins px-2 lg:px-20 xl:px-40 mt-5 lg:mt-10 mb-28 lg:mb-40">
                {/* Breadcrumb */}
                <div className="flex gap-2 text-sm lg:text-base mb-5 lg:mb-10">
                    <Link to={"/"} className="hover:text-lime-500">Home</Link>
                    &gt;
                    <Link to={"/trainers"} className="hover:text-lime-500">Trainers</Link>
                    &gt;
                    <p>{data.title}</p>
                </div>
                {/* Grid */}
                <div className="grid sm:grid-cols-3 gap-5 lg:gap-10">
                    {/* Image */}
                    <div className="w-44 h-44 md:w-full md:h-80 lg:h-96 rounded-full md:rounded-sm overflow-hidden mx-auto">
                        <img src={data.image} alt="trainer-img" className="h-full w-full object-cover object-top" />
                    </div>
                    {/* Text */}
                    <div className="w-full sm:col-span-2">
                        <div className="w-full">
                            <p className="lg:text-xl border-s-4 text-blue-600 border-blue-600 ps-2 font-semibold sm:mb-1">Train With</p>
                            <h2 className="text-xl lg:text-2xl xl:text-4xl font-bold mb-3">{data.title}</h2>
                            <p className="text-sm lg:text-base mb-3 pb-3 border-b">{data.description}</p>
                            <h3 className="sm:text-lg lg:text-xl font-bold mb-2">Follow {data.title.split(" ")[0]}</h3>
                            <ul className="flex gap-2 text-sm lg:text-base my-3">
                                <li>
                                    <a href="#" className="w-8 h-8 flex justify-center items-center rounded-full border bg-transparent hover:bg-black hover:text-white hover:border-black"><i className="fa-brands fa-x-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#" className="w-8 h-8 flex justify-center items-center rounded-full border bg-transparent hover:bg-black hover:text-white hover:border-black"><i className="fa-brands fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#" className="w-8 h-8 flex justify-center items-center rounded-full border bg-transparent hover:bg-black hover:text-white hover:border-black"><i className="fa-brands fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}