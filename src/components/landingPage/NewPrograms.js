import React from "react";


// Define component
export const NewPrograms = () => {
    return (
        <section className="container mx-auto font-poppins px-2 lg:px-20 xl:px-40 my-20">
            <div className="flex items-center justify-between gap-2">
                <div>
                    <p className="text-xl border-s-4 text-indigo-500 border-indigo-500 ps-2 font-semibold mb-1">Explore</p>
                    <h2 className="text-xl lg:text-4xl font-bold">New Programs</h2>
                </div>
                <a href="#" className="px-3 py-2 lg:px-4 lg:py-3 bg-black text-white hover:bg-lime-400 hover:text-black rounded-sm lg:text-lg font-semibold">
                    Programs <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>
            <div className="grid grid-cols-3 gap-5 my-10">
                <div>
                    <img src="https://placehold.co/600x400" alt="program-img" className="h-96 w-full object-cover" />
                    <div className="my-3">
                        <h2 className="text-xl font-bold mb-1">Crossfit Training</h2>
                        <p>Train with professional crossfit trainers to boost your fitness levels.</p>
                    </div>
                </div>
                <div>
                    <img src="https://placehold.co/600x400" alt="program-img" className="h-96 w-full object-cover" />
                    <div className="my-3">
                        <h2 className="text-xl font-bold mb-1">Boxing Training</h2>
                        <p>Build strength and speed with boxing trainers and sparring partners.</p>
                    </div>
                </div>
                <div>
                    <img src="https://placehold.co/600x400" alt="program-img" className="h-96 w-full object-cover" />
                    <div className="my-3">
                        <h2 className="text-xl font-bold">Yoga</h2>
                        <p>Create mindfullness and flexibility with a yoga classes.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
