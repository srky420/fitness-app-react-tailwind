import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { programs } from "../data/programs";


// Define component
export const Program = () => {

    const { programId } = useParams();

    const [data, setData] = useState({});

    console.log(programId);

    useEffect(() => {
        console.log(programs.find((item, index) => item.id === programId));
    }, [data])

    return (
        <section className="font-poppins">
            <div className="w-full h-40 sm:h-60 lg:h-80 relative">
                <img src="./img/hero-img.jpg" alt="hero-img" className="block w-full h-full object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <h1 className="text-4xl xs:text-5xl lg:text-6xl xl:text-7xl mt-5 sm:mt-10 font-bold text-white">Programs</h1>
                </div>
            </div>
            <div className="container mx-auto font-poppins px-2 lg:px-20 xl:px-40 mt-5 lg:mt-10 mb-20 lg:mb-40">
                {/* Breadcrumb */}
                <div className="flex gap-2 text-sm lg:text-base mb-5 lg:mb-10">
                    <Link to={"/"} className="hover:text-lime-500">Home</Link>
                    &gt;
                    <p>Programs</p>
                </div>
                {/* Program */}
                <div className="grid grid-cols-2 gap-5">
                    <div className="w-full">
                        <img src="" alt="program-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}