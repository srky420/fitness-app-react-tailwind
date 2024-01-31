import React from "react";


// Define component
export const TrainerCard = ({ data }) => {
    return (
            <div className="w-full h-full border">
                <img src={data.image} alt="card-img" className="h-40 sm:h-52 md:h-60 lg:h-72 xl:h-80 2xl:h-96 w-full object-cover rounded-sm lg:grayscale hover:grayscale-0 object-top" />
                <div className="my-1 text-center">
                    <h2 className="text-sm sm:text-base lg:text-xl font-bold">{data.title}</h2>   
                    <p className="text-xs sm:text-sm lg:text-base mb-1">{data.description}</p>
                    <div className="text-xl sm:text-2xl flex gap-2 justify-center">
                        <a href="#" className="hover:text-blue-500"><i className="fa-brands fa-square-x-twitter"></i></a>
                        <a href="#" className="hover:text-blue-500"><i className="fa-brands fa-square-instagram"></i></a>
                    </div>
                </div>
            </div>
    )
}
