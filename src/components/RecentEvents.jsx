import {useState} from "react";
import TitleTab from "./TitleTab";
import ArkansasOpen from "../assets/images/events/Arkansas_open.jpg";
import SchoolAnniversary from "../assets/images/events/school_anniversary.jpg";
import MemphisOpen from "../assets/images/events/memphis_open.jpg";
import SchoolTournament from "../assets/images/events/dc_dragons_tournament.png";

import { Carousel,Card, Button} from "react-daisyui";
import CarouselEventCard from "./CarouselEventCard";





function RecentEvents(){

    const EVENTS = [
        {
            image: MemphisOpen,
            title: "Memphis Open",
            message: "The memphis open tournament was great! We had a fantastic time and brought home some medals!",
            fbUrl: "https://www.facebook.com/share/p/19zji6qwqG/"
        },
        {
            image: SchoolAnniversary,
            title: "12 Year School Anniversary",
            message: "We begin our twelfth year as a karate school. We want you to be part of our family.",
            fbUrl: "https://www.facebook.com/share/p/1HQSpsA8aj/"
        },
        {
            image: ArkansasOpen,
            title: "Arkansas Open",
            message: "My kids ready to get going this morning! Let's go lucas, Emily, and mackenzie!",
            fbUrl: "https://www.facebook.com/share/p/1A1zdcdWRg/"
        }
       
    ];

    const schoolEvents = EVENTS.map((event) => (
        <CarouselEventCard 
            image={event.image} 
            title={event.title} 
            message={event.message} 
            fbUrl={event.fbUrl}
            key={event.title}
        />
    ));

    return(
        <div id="recentEvents" className={`max-w bg-[#919499] p-4 relative`}>
            <TitleTab title="Recent Events" bgcolor="bg-[#919499]" textcolor="text-white" />
            <div className="grid justify-center">
                <div className="flex max-w-[30rem] mt-12 mb-12">
                    <Carousel className="rounded-none" width="full">
                        {schoolEvents}
                    </Carousel>
                </div>
            </div>


        </div>
    );
}

export default RecentEvents;