import React from "react";


// Define component
export const GridDisplay = () => {
    return (
        <section className="bg-gray-50">
            <div className="container mx-auto font-poppins px-2 lg:px-20 xl:px-40 py-10 lg:py-20">
                <div className="flex flex-col md:flex-row justify-between gap-5">
                    {/* Text and stages */}
                    <div className="flex flex-col h-full w-full">
                        <p className="lg:text-xl border-s-4 text-blue-600 border-blue-600 ps-2 font-semibold sm:mb-1">Our Aim</p>
                        <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-1 sm:mb-3">Your Dream Physique</h2>
                        <p className="text-sm lg:text-base">
                            We care for your body and our programs are specifically built to help you get to the best shape of your life through:
                        </p>
                        {/* Three stages (large screen) */}
                        <div className="hidden md:flex flex-col gap-2 font-bold text-blue-600 my-10 tracking-widest mx-auto">
                            <p className="lg:text-lg mb-1"><i className="fa-solid fa-circle text-sm me-1 animate-pulse"></i> Training</p>
                            <div className="bg-blue-600 h-20 w-1 ms-1 rounded-md"></div>
                            <p className="lg:text-lg mb-1"><i className="fa-solid fa-circle text-sm me-1 animate-pulse"></i> Diet</p>
                            <div className="bg-blue-600 h-20 w-1 ms-1 rounded-md"></div>
                            <p className="lg:text-lg mb-1"><i className="fa-solid fa-circle text-sm me-1 animate-pulse"></i> Discipline</p>
                        </div>
                        {/* Three stages (small screen) */}
                        <div className="flex gap-2 font-bold text-blue-600 my-10 tracking-wide w-full justify-between md:hidden">
                            <div className="mb-1 flex items-center w-full relative">
                                <i className="fa-solid fa-circle text-sm me-1 animate-pulse"></i>
                                <div className="bg-blue-600 w-full h-1 ms-1 rounded-md"></div>
                                <p className="absolute -bottom-8">Training</p>
                            </div>
                            <div className="mb-1 flex items-center w-full relative">
                                <i className="fa-solid fa-circle text-sm me-1 animate-pulse"></i>
                                <div className="bg-blue-600 w-full h-1 ms-1 rounded-md"></div>
                                <p className="absolute -bottom-8 -left-2">Diet</p>
                            </div>
                            <div className="mb-1 flex items-center relative">
                                <i className="fa-solid fa-circle text-sm me-1 animate-pulse"></i>
                                <p className="absolute -bottom-8 right-0">Discipline</p>
                            </div>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="h-full w-full relative self-end">
                        <img src="./img/grid-img.jpg" alt="gird-img" className="h-60 md:h-128 object-cover w-full object-top rounded-sm" />
                        <a href="#"
                            className="absolute bottom-5 left-5 px-4 lg:px-6 py-3 lg:py-4 bg-lime-400 hover:bg-lime-300 rounded-sm lg:text-xl font-semibold text-black me-2">
                            Get Started <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}