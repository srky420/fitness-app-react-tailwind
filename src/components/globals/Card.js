import React from 'react'


// Define component
export const Card = ({ data }) => {
    return (
            <div className="w-40 xs:w-44 sm:w-72 md:w-80 lg:w-full h-full">
                <img src={data.image} alt="card-img" className="h-40 sm:h-52 md:h-60 lg:h-72 xl:h-80 2xl:h-96 w-full object-cover rounded-sm" />
                <div className="my-1 sm:my-2">
                    <h2 className="lg:text-xl font-bold mb-1">{data.title}</h2>
                    <p className="text-xs sm:text-sm lg:text-base mb-1">{data.description}</p>
                    <a href="#" className="text-xs sm:text-sm lg:text-base text-blue-600 hover:text-blue-500">Show More</a>
                </div>
            </div>
    )
}
