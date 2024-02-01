import React from "react";


// Define component
export const Newsletter = () => {
    return (
        <section className="text-white font-poppins mt-auto">
            <div className="h-60 sm:h-80 lg:h-96 relative">
                <img src="./img/newsletter-img.jpg" alt="newsletter-img" className="w-full h-full object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col gap-5 items-center justify-center">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Subscribe to Newsletter</h2>
                    <form className="flex w-full xs:w-96 sm:w-144 px-5">
                        <input type="email" className="rounded-s-full px-5 py-3 bg-black bg-opacity-90 outline-none w-full text-sm sm:text-base" placeholder="Email Address..." />
                        <button className="font-semibold rounded-e-full px-5 text-black bg-lime-400 hover:bg-lime-300">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    )
}