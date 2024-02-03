import React, { useState } from "react";


// Define component
export const ContactForm = () => {

    const [state, setState] = useState({
        fullName: '',
        emailAddress: '',
        message: ''
    });

    return (
        <form className="grid grid-cols-2 p-5 xs:p-10 bg-gray-50 rounded-sm gap-2 lg:gap-5 w-full text-sm 2xl:text-base">
            <h2 className="text-xl sm:text-2xl 2xl:text-4xl font-bold col-span-2">Leave Us a Message</h2>
            <input type="text" className="outline-none border rounded-md p-3 focus:border-lime-400" placeholder="Full Name..."
                onChange={(e) => setState(state => ({...state, fullName: e.target.value}))} value={state.fullName} />
            <input type="email" className="outline-none border rounded-md p-3 focus:border-lime-400" placeholder="Email Address..."
                onChange={(e) => setState(state => ({...state, emailAddress: e.target.value}))} value={state.emailAddress} />
            <textarea className="outline-none border rounded-md p-3 resize-none col-span-2 focus:border-lime-400" rows={10} placeholder="Message..."
                onChange={(e) => setState(state => ({...state, message: e.target.value}))} value={state.message}>
            </textarea>
            <button
                className="col-span-2 px-3 lg:px-4 py-2 lg:py-3 border-2 rounded-md lg:text-lg font-semibold bg-white text-black hover:border-lime-400 hover:bg-lime-400">
                Send Message <i className="fa-solid fa-paper-plane ms-1"></i>
            </button>
        </form>
    )
}