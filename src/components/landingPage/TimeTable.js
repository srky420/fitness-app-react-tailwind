import React from "react";


// Define component
export const TimeTable = () => {
    return (
        <section className="py-10 lg:py-20 bg-black bg-opacity-95 text-white">
            <div className="container mx-auto font-poppins px-2 lg:px-20 xl:px-40">
                <div className="mb-5 sm:mb-10">
                    <p className="lg:text-xl border-s-4 text-lime-400 border-lime-400 ps-2 font-semibold sm:mb-1">Weekly</p>
                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">Time Table</h2>
                </div>
            </div>
            <div className="flex gap-2 justify-between my-3 overflow-x-auto">
                <div className="container mx-auto font-poppins px-2 lg:px-20 xl:px-40 overflow-visible">
                    <table className="table-auto w-full text-sm xl:text-base">
                        <thead>
                            <tr className="*:py-5 *:px-5 *:border text-center *:border-gray-600 *:text-lime-400 lg:text-lg">
                                <th className="text-nowrap">Time</th>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thursday</th>
                                <th>Friday</th>
                                <th>Saturday</th>
                                <th>Sunday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="*:py-5 *:px-5 *:border text-center *:border-gray-600">
                                <td className="text-nowrap">06:00 am</td>
                                <td>Yoga</td>
                                <td>Crossfit</td>
                                <td>Yoga</td>
                                <td>Crossfit</td>
                                <td>Pilates</td>
                                <td>Cardio</td>
                                <td>Cardio</td>
                            </tr>
                            <tr className="*:py-5 *:px-5 *:border text-center *:border-gray-600">
                                <td className="text-nowrap">08:00 am</td>
                                <td>Crossfit</td>
                                <td>Boxing</td>
                                <td>Crossfit</td>
                                <td>Yoga</td>
                                <td>Free</td>
                                <td>Bodybuilding</td>
                                <td>Bodybuilding</td>
                            </tr>
                            <tr className="*:py-5 *:px-5 *:border text-center *:border-gray-600">
                                <td className="text-nowrap">10:00 am</td>
                                <td>Bodybuilding</td>
                                <td>Crossfit</td>
                                <td>Bodybuilding</td>
                                <td>Crossfit</td>
                                <td>Crossfit</td>
                                <td>Free</td>
                                <td>Free</td>
                            </tr>
                            <tr className="*:py-5 *:px-5 *:border text-center *:border-gray-600">
                                <td className="text-nowrap">06:00 pm</td>
                                <td>Cardio</td>
                                <td>Boxing</td>
                                <td>Pilates</td>
                                <td>Bodybuilding</td>
                                <td>Crossfit</td>
                                <td>Free</td>
                                <td>Free</td>
                            </tr>
                            <tr className="*:py-5 *:px-5 *:border text-center *:border-gray-600">
                                <td className="text-nowrap">08:00 pm</td>
                                <td>Boxing</td>
                                <td>Crossfit</td>
                                <td>Yoga</td>
                                <td>Bodybuilding</td>
                                <td>Free</td>
                                <td>Free</td>
                                <td>Free</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}