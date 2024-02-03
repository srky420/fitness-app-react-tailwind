import React from "react";
import { trainers } from "../data/trainers";
import { TrainerCard } from "../globals/TrainerCard";
import { Link } from "react-router-dom";


// Define component
export const TopTrainers = () => {
    return (
        <section className="py-10 lg:py-20 bg-gray-50">
            {/* Header */}
            <div className="container mx-auto font-poppins px-2 lg:px-20 xl:px-40">
                <div className="flex items-center justify-between gap-2 mb-3 sm:mb-5">
                    <div>
                        <p className="lg:text-xl border-s-4 text-blue-600 border-blue-600 ps-2 font-semibold sm:mb-1">Train With</p>
                        <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">Top Trainers</h2>
                    </div>
                    <Link to={"/trainers"} className="px-3 py-2 lg:px-4 lg:py-3 bg-black text-white hover:bg-lime-400 hover:text-black rounded-sm lg:text-lg font-semibold">
                        All Trainers <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
            {/* Trainer Cards */}
            <div className="overflow-auto">
                <div className="container mx-auto font-poppins px-2 lg:px-20 xl:px-40 overflow-visible w-max xs:w-full">
                    <div className="flex gap-2 sm:gap-5">
                        {trainers.slice(0, 3).map((item, index) => (
                            <TrainerCard data={item} key={"trainer" + index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}