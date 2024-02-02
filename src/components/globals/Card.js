import React from 'react'
import { Link } from 'react-router-dom'


// Define component
export const Card = ({ data }) => {
    return (
            <div className="w-full h-full">
                <img src={data.image} alt="card-img" className="h-40 sm:h-52 md:h-60 lg:h-72 xl:h-80 2xl:h-96 w-full object-cover rounded-sm" />
                <div className="my-1 sm:my-2">
                    <h2 className="text-sm sm:text-base lg:text-xl font-bold mb-1">{data.title}</h2>
                    <p className="text-xs sm:text-sm lg:text-base mb-1">{data.description}</p>
                    <Link to={`/programs/${data.id}`} className="text-xs sm:text-sm lg:text-base text-blue-600 hover:text-blue-500">Show More</Link>
                </div>
            </div>
    )
}
