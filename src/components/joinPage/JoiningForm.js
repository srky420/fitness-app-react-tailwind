import React, { useState } from "react";


// Define component
export const JoiningForm = () => {
    
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        address: '',
        pricePackage: ''
    });

    return (
        <form className="grid grid-cols-2 py-5 p-3 xs:p-5 sm:p-10 bg-gray-50 rounded-sm gap-2 lg:gap-5 w-full text-xs sm:text-sm 2xl:text-base">
            {/* Personal info */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold col-span-2">Personal Info</h2>
            <input type="text" className="outline-none border rounded-md p-3 focus:border-lime-400" placeholder="First Name..." required
                onChange={(e) => setState(state => ({...state, firstName: e.target.value}))} value={state.firstName} />

            <input type="text" className="outline-none border rounded-md p-3 focus:border-lime-400" placeholder="Last Name..." required
                onChange={(e) => setState(state => ({...state, lastName: e.target.value}))} value={state.lastName} />

            <input type="email" className="outline-none border rounded-md p-3 focus:border-lime-400" placeholder="Email Address..." required
                onChange={(e) => setState(state => ({...state, emailAddress: e.target.value}))} value={state.emailAddress} />

            <input type="text" className="outline-none border rounded-md p-3 focus:border-lime-400" placeholder="Phone Number..." required
                onChange={(e) => setState(state => ({...state, phoneNumber: e.target.value}))} value={state.phoneNumber} />

            <textarea className="outline-none border rounded-md p-3 resize-none focus:border-lime-400 col-span-2" rows={5} placeholder="Address..." required
                onChange={(e) => setState(state => ({...state, address: e.target.value}))} value={state.address} >
            </textarea>

            <hr className="col-span-2" />
            {/* Price packages */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold col-span-2">Price Package</h2>
            <div className="grid grid-cols-3 gap-1 sm:gap-2 col-span-2">
                <div className="w-full h-full">
                    <input type="radio" className="hidden peer" id="basic" name="package" value={"basic"} onChange={(e) => setState(state => ({...state, pricePackage: e.target.value}))}  defaultChecked />
                    <label className="block w-full h-full p-2 sm:p-5 border-2 rounded-md hover:cursor-pointer group peer-checked:border-lime-500 text-center hover:bg-white" htmlFor="basic">
                        <h2 className="text-base xs:text-xl sm:text-2xl lg:text-4xl font-bold mb-3 text-blue-600">Basic</h2>
                        <h2 className="text-2xl lg:text-3xl font-semibold">$10 <span className="text-base xs:text-lg lg:text-xl">/ Month</span></h2>
                    </label>
                </div>
                <div className="w-full">
                    <input type="radio" className="hidden peer" id="standard" name="package" value={"standard"} onChange={(e) => setState(state => ({...state, pricePackage: e.target.value}))} />
                    <label className="block w-full h-full p-2 sm:p-5 border-2 rounded-md hover:cursor-pointer group peer-checked:border-lime-500 text-center hover:bg-white" htmlFor="standard">
                        <h2 className="text-base xs:text-xl sm:text-2xl lg:text-4xl font-bold mb-3 text-lime-500">Standard</h2>
                        <h2 className="text-2xl lg:text-3xl font-semibold">$30 <span className="text-base xs:text-lg lg:text-xl">/ Month</span></h2>
                    </label>
                </div>
                <div className="w-full">
                    <input type="radio" className="hidden peer" id="premium" name="package" value={"premium"} onChange={(e) => setState(state => ({...state, pricePackage: e.target.value}))} />
                    <label className="block w-full h-full p-2 sm:p-5 border-2 rounded-md hover:cursor-pointer group peer-checked:border-lime-500 text-center hover:bg-white" htmlFor="premium">
                        <h2 className="text-base xs:text-xl sm:text-2xl lg:text-4xl font-bold mb-3">
                            <span className="bg-gradient-to-r from-blue-500 to-lime-500 bg-clip-text text-transparent">Premium</span>
                        </h2>
                        <h2 className="text-2xl lg:text-3xl font-semibold">$50 <span className="text-base xs:text-lg lg:text-xl">/ Month</span></h2>
                    </label>
                </div>
            </div>
            <textarea className="outline-none border rounded-md p-3 resize-none focus:border-lime-400 col-span-2" rows={5} placeholder="Other details..."></textarea>
            <hr className="col-span-2" />
            <button
                className="ms-auto w-fit col-span-2 px-3 lg:px-4 py-2 lg:py-3 my-1 border-2 rounded-md lg:text-lg font-semibold bg-white text-black hover:border-lime-400 hover:bg-lime-400 transition-colors">
                Join Now <i className="fa-solid fa-arrow-right"></i>
            </button>
        </form>
    )
}