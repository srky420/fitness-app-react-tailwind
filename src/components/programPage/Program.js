import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { programs } from "../data/programs";


// Define component
export const Program = () => {
    // Param
    const { programId } = useParams();
    
    const data = programs.find((item, index) => item.id === parseInt(programId))

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <section className="font-poppins">
            <div className="w-full h-40 sm:h-60 lg:h-80 relative">
                <img src={"/img/hero-img.jpg"} alt="hero-img" className="block w-full h-full object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <h1 className="text-3xl xs:text-4xl lg:text-5xl xl:text-6xl mt-5 sm:mt-10 font-bold text-white">{data.title}</h1>
                </div>
            </div>
            <div className="container mx-auto font-poppins px-2 lg:px-20 xl:px-40 mt-5 lg:mt-10 mb-20 lg:mb-40">
                {/* Breadcrumb */}
                <div className="flex gap-2 text-sm lg:text-base mb-5 lg:mb-10">
                    <Link to={"/"} className="hover:text-lime-500">Home</Link>
                    &gt;
                    <Link to={"/programs"} className="hover:text-lime-500">Programs</Link>
                    &gt;
                    <p>{data.title}</p>
                </div>
                {/* Program */}
                <div className="grid xl:grid-cols-3 gap-5 2xl:gap-10">
                    <div className="w-full h-fit bg-gray-50 p-5">
                        <div className="mb-5">
                            <h3 className="font-bold text-2xl mb-2">Program Details</h3>
                            <p className="text-sm sm:text-base">{data.description}</p>
                        </div>
                        <div className="flex justify-between mb-3 pb-3 border-b text-sm lg:text-base">
                            <h3 className="font-semibold">Duration:</h3>
                            <p>{data.duration}</p>
                        </div>
                        <div className="flex justify-between mb-3 pb-3 border-b text-sm lg:text-base">
                            <h3 className="font-semibold">Level:</h3>
                            <p>{data.level}</p>
                        </div>
                        <div className="flex justify-between mb-3 pb-3 border-b text-sm lg:text-base">
                            <h3 className="font-semibold">Sessions:</h3>
                            <p>{data.frequency}</p>
                        </div>
                        <div className="flex justify-between mb-3 pb-3 text-sm lg:text-base">
                            <h3 className="font-semibold">Enrolled:</h3>
                            <p>{data.enrolled}</p>
                        </div>
                    </div>
                    <div className="w-full h-full xl:col-span-2 flex gap-5 xl:flex-col">
                        <div className="hidden sm:block w-full h-full">
                            <img src={data.image} alt="program-img" className="w-full h-96 xl:h-128 xl:w-full object-cover mb-5 rounded-sm" />
                        </div>
                        <div className="w-full">
                            <h2 className="text-xl lg:text-2xl xl:text-4xl font-bold mb-3">{data.title}</h2>
                            <p className="text-sm lg:text-base mb-3">{data.detail}</p>
                            <h3 className="sm:text-lg lg:text-xl font-bold mb-2">Benefits</h3>
                            <ul className="*:my-2 list-disc mx-5 mb-3 text-sm lg:text-base">
                                {data.benefits.map((item, index) => (
                                    <li key={"benefit" + index}>{item}</li>
                                ))}
                            </ul>
                            <Link to={"/join"} className="block w-fit ms-auto px-3 xl:px-6 py-2 xl:py-4 border-2 border-black hover:bg-lime-400 hover:border-lime-400 rounded-sm xl:text-lg font-semibold">
                                Get Started <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}