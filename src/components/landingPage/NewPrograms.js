import React from "react";
import { newPrograms } from "../data/newPrograms";
import { Card } from "../globals/Card";


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
                    <a href="#" className="px-3 py-2 lg:px-4 lg:py-3 bg-black text-white hover:bg-lime-400 hover:text-black rounded-sm lg:text-lg font-semibold">
                        Programs <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
            {/* New program cards */}
            <div className="overflow-auto">
                <div className="container mx-auto font-poppins px-2 lg:px-20 xl:px-40 overflow-visible w-max">
                    <div className="flex gap-2 sm:gap-5">
                        <Card data={newPrograms[0]} />
                        <Card data={newPrograms[1]} />
                        <Card data={newPrograms[2]} />
                    </div>
                </div>
            </div>
        </section>
    )
}
