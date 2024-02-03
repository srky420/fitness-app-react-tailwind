import React from "react";
import { Link } from "react-router-dom";


// Define component
export const TrainerCard = ({ data }) => {
    return (
            <Link to={`/trainers/${data.id}`} className="w-full h-full border rounded-sm group/trainers">
                <img src={data.image} alt="card-img" className="h-40 sm:h-52 md:h-60 lg:h-72 xl:h-80 2xl:h-96 w-full object-cover rounded-t-sm lg:grayscale hover:grayscale-0 object-top group-hover/trainers:grayscale-0" />
                <div className="my-1 text-center">
                    <h2 className="text-sm sm:text-base lg:text-xl font-bold">{data.title}</h2>   
                    <p className="text-xs sm:text-sm lg:text-base mb-1">{data.specialization}</p>
                    <ul className="flex gap-2 text-sm lg:text-base w-fit mx-auto my-3">
                        <li>
                            <a href="#" className="w-8 h-8 flex justify-center items-center rounded-full border bg-transparent hover:bg-black hover:text-white hover:border-black"><i className="fa-brands fa-x-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#" className="w-8 h-8 flex justify-center items-center rounded-full border bg-transparent hover:bg-black hover:text-white hover:border-black"><i className="fa-brands fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="#" className="w-8 h-8 flex justify-center items-center rounded-full border bg-transparent hover:bg-black hover:text-white hover:border-black"><i className="fa-brands fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </Link>
    )
}
