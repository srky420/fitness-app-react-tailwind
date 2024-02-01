import React from "react";
import { Link, useRouteError } from "react-router-dom";


// Define component
export const Error = () => {

    const error = useRouteError();

    return (
        <div className="flex flex-col h-screen w-screen justify-center items-center font-poppins">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">An Error Occured</h2>
            <p className="text-xl sm:text-2xl">{error.message || error.status}</p>
            <Link to={"/"} className="block mx-auto w-fit px-3 py-2 lg:px-4 lg:py-3 border-2 border-black hover:bg-lime-400 hover:border-lime-400 rounded-sm lg:text-lg font-semibold mt-5">
                Back to Home <i className="fa-solid fa-arrow-right"></i>
            </Link>
        </div>
    )
}