import React, { useState } from "react";
import { testimonials } from "../data/testimonials";


// Define component
export const Testimonials = () => {

    const [current, setCurrent] = useState(0);

    const handleChange = () => {
        setCurrent(prev => prev === 3 ? 0 : prev =+ 1)
    }

    return (
        <section className="py-10 lg:py-20 bg-gray-50">
            {/* Header */}
            <div className="container mx-auto font-poppins px-2 lg:px-20 xl:px-40">
                <div className="mb-3 sm:mb-5">
                    <p className="lg:text-xl border-s-4 text-blue-600 border-blue-600 ps-2 font-semibold sm:mb-1">What People Say</p>
                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">Client Testimonials</h2>
                </div>
                {testimonials.map((item, index) => (
                    <div className={index === current ? "block" : "hidden"} key={"testimonial" + index}>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 lg:gap-10 justify-center my-5 lg:my-20 border rounded-md p-5 sm:p-10 md:w-fit mx-auto bg-white relative">
                            <div className="w-24 h-24 sm:w-36 sm:h-28 md:w-40 md:h-32 lg:w-32 lg:h-32 rounded-full mx-auto">
                                <img src={item.image} alt="testimonial-img" className="block w-full h-full object-cover rounded-full object-top" />
                            </div>
                            <div className="w-full lg:w-128 text-center sm:text-start">
                                <h2 className="text-lg lg:text-xl font-bold mb-1">{item.name}</h2>
                                <p className="text-xs sm:text-sm lg:text-base mb-1">{item.message}</p>
                                <p className="text-xs sm:text-sm lg:text-base text-yellow-500 text-end">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </p>
                            </div>
                            <div className="absolute top-5 left-5 text-4xl">
                                <i className="fa-solid fa-quote-left"></i>
                            </div>
                        </div>
                        <div className="flex justify-center gap-2 text-sm lg:text-base">
                            {testimonials.map((item, index) => (
                                <button key={"testimonialIndicator" + index} onClick={() => setCurrent(index)}>
                                    {current === index ? <i className="fa-solid fa-circle text-lg"></i> : <i className="fa-regular fa-circle"></i>}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}

               
            </div>
        </section>
    )
}