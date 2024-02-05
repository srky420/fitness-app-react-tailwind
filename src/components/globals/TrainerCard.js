import React from "react";
import { Link } from "react-router-dom";


// Define component
export const TrainerCard = ({ data }) => {
    return (
            <div className="w-full h-full border rounded-sm">
                <Link to={`/trainers/${data.id}`}>
                    <img src={data.image} alt="card-img" className="h-40 sm:h-52 md:h-60 lg:h-72 xl:h-80 2xl:h-96 w-full object-cover rounded-t-sm lg:grayscale hover:grayscale-0 object-top" />
                </Link>
                <div className="my-1 text-center">
                    <Link to={`/trainers/${data.id}`} className="text-sm sm:text-base lg:text-xl font-bold hover:text-blue-500">{data.title}</Link>   
                    <p className="text-xs sm:text-sm lg:text-base mb-1">{data.specialization}</p>
                    <ul className="flex gap-2 text-sm lg:text-base w-fit mx-auto my-3">
                        <li>
                            <a href="#" className="w-8 h-8 flex justify-center items-center rounded-full border bg-transparent hover:bg-black hover:text-white hover:border-black transition-colors"><i className="fa-brands fa-x-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#" className="w-8 h-8 flex justify-center items-center rounded-full border bg-transparent hover:bg-black hover:text-white hover:border-black transition-colors"><i className="fa-brands fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="#" className="w-8 h-8 flex justify-center items-center rounded-full border bg-transparent hover:bg-black hover:text-white hover:border-black transition-colors"><i className="fa-brands fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
    )
}
