import React from "react";
import { Card } from "../globals/Card";
import { programs } from "../data/programs";
import { Link } from "react-router-dom";


// Define component
export const NewPrograms = () => {
    return (
        <section className="my-10 lg:my-20">
            {/* Header */}
            <div className="container mx-auto font-poppins px-2 lg:px-20 xl:px-40">
                <div className="flex items-center justify-between gap-2 mb-3 sm:mb-5">
                    <div>
                        <p className="lg:text-xl border-s-4 text-blue-600 border-blue-600 ps-2 font-semibold sm:mb-1">Explore</p>
                        <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">New Programs</h2>
                    </div>
                    <Link to={"/programs"} className="px-3 py-2 lg:px-4 lg:py-3 bg-black text-white hover:bg-lime-400 hover:text-black rounded-sm lg:text-lg font-semibold">
                        Programs <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
            {/* New program cards */}
            <div className="overflow-auto">
                <div className="container mx-auto font-poppins px-2 lg:px-20 xl:px-40 overflow-visible">
                    <div className="flex gap-2 sm:gap-5 w-max xs:w-full *:w-40 xs:*:w-full">
                        {programs.slice(0, 3).map((item, index) => (
                            <Card data={item} key={"newPrograms" + index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
