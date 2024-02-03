import React, { useEffect } from "react";
import { Hero } from "./Hero";
import { NewPrograms } from "./NewPrograms";
import { Testimonials } from "./Testimonials";
import { Pricing } from "./Pricing";
import { TopTrainers } from "./TopTrainers";
import { TimeTable } from "./TimeTable";
import { GridDisplay } from "./GridDisplay";


// Define component
export const LandingPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <Hero />
            <NewPrograms />
            <GridDisplay />
            <TimeTable />
            <TopTrainers />
            <Pricing />
            <Testimonials />
        </div>
    )
}