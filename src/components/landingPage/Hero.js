import React, { useEffect, useState } from "react";
import { carousel } from "../data/carousel";
import { Link } from "react-router-dom";


// Define component
export const Hero = () => {

    const [current, setCurrent] = useState(0);

    // Use effect for slide show
    useEffect(() => {
        const interval = setInterval(handleChange, 5000);

        // Cleanup
        return () => clearInterval(interval);
    }, [current])

    // Handle slideshow
    const handleChange = () => {
        setCurrent(prev => prev === carousel.length - 1 ? 0 : prev += 1);
    }

    return (
        <section className="w-full font-poppins text-white mx-auto flex overflow-hidden relative">
            {/* Carousel */}
            {carousel.map((item, index) => 
                (
                <div className="overflow-hidden h-80 md:h-96 lg:h-128 xl:h-144" key={"carouselItem" + index}>
                    <div className={current === index ? "w-screen h-full transition-all" : "w-0 h-full invisible transition-all"} key={"carouselItem" + index}>
                        <img src={item.image} alt="hero-img" className="w-full h-full object-cover absolute top-0 sm:rounded-sm" />
                        <div className="absolute text-center w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center sm:rounded-sm">
                            <h1 className="text-4xl xs:text-5xl lg:text-6xl xl:text-7xl font-bold px-2 mb-5 md:mb-10">{item.title}</h1>
                            <div className="my-5">
                                <Link to={"/join"} className="px-3 lg:px-6 py-2 lg:py-4 bg-lime-400 border-2 border-lime-400 hover:bg-lime-300 rounded-sm lg:text-xl font-semibold text-black me-2 transition-colors">
                                    Start Today
                                </Link>
                                <Link to={item.href} className="px-3 lg:px-6 py-2 lg:py-4 border-2 border-white hover:bg-white hover:bg-opacity-10 rounded-sm lg:text-xl font-semibold transition-colors">
                                    {item.link} <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                )
            )}
            {/* Carousel control */}
            <div className="flex gap-3 justify-center text-sm absolute bottom-5 left-1/2 -translate-x-1/2">
                {carousel.map((item, index) =>
                <button key={"carouselIndicator" + index} onClick={() => setCurrent(index)}>
                    {current === index ? <i className="fa-solid fa-circle text-lg"></i> : <i className="fa-regular fa-circle"></i>}
                </button>
                )}
            </div>
            {/* Carousel control left/right */}
            <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-2">
                <button onClick={() => setCurrent(prev => prev === 0 ? carousel.length - 1 : prev -= 1)} className="text-xl"><i className="fa-solid fa-chevron-left"></i></button>
                <button onClick={() => setCurrent(prev => prev === carousel.length - 1 ? 0 : prev += 1)} className="text-xl"><i className="fa-solid fa-chevron-right"></i></button>
            </div>
        </section>
    )
}
