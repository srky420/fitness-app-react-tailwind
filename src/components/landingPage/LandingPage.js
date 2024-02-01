import React from "react";
import { Hero } from "./Hero";
import { NewPrograms } from "./NewPrograms";
import { Newsletter } from "../globals/Newsletter";
import { Testimonials } from "./Testimonials";
import { Pricing } from "./Pricing";
import { TopTrainers } from "./TopTrainers";
import { TimeTable } from "./TimeTable";
import { GridDisplay } from "./GridDisplay";


// Define component
export const LandingPage = () => {
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