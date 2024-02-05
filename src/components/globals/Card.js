import React from 'react'
import { Link } from 'react-router-dom'


// Define component
export const Card = ({ data }) => {
    return (
            <div className="w-full h-full">
                <Link to={`/programs/${data.id}`}>
                    <img src={data.image} alt="card-img" className="h-40 sm:h-52 md:h-60 lg:h-72 xl:h-80 2xl:h-96 w-full object-cover rounded-sm" />
                </Link>
                <div className="my-1 sm:my-2">
                    <Link to={`/programs/${data.id}`} className="block text-sm sm:text-base lg:text-xl font-bold mb-1 hover:text-blue-500 transition-colors">{data.title}</Link>
                    <p className="text-xs sm:text-sm lg:text-base mb-1">{data.description}</p>
                    <Link to={`/programs/${data.id}`} className="text-xs sm:text-sm lg:text-base text-blue-600 hover:text-blue-500 transition-colors">Show More</Link>
                </div>
            </div>
    )
}
