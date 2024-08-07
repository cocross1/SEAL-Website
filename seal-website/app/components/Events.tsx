'use client'
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeader';
import EventCard from './EventCard';

const EventsSection = () => {
    return (
        <div className="bg-white pt-5 pb-20">
            <div className="flex items-center">
                <div className="grow border-b-4 border-blue-900 pt-5 mx-10"></div>
                <SectionHeading title="Upcoming Events" />
                <div className="grow border-b-4 border-blue-900 pt-5 mx-10"></div>
            </div>
            <div className="
                 mt-5
                 px-4
                 gap-4
                 items-center
                 justify-items-center
                 grid grid-cols-1">

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-5/6"
                >
                    {/* example event card below! */}
                    {/* <EventCard
                        link="https://stanford.zoom.us/meeting/register/tJMqdeqsqzMuG9AvrwHU55PCbWJutlDJxX9i#/registration"
                        date="July 2nd - 4pm"
                        description="Featuring Dr. Atul Gawande"
                    /> */}
                    
                    <div className="text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl text-center">
                        No upcoming events, check back soon!
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default EventsSection;
