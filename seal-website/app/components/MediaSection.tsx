'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeader';
import { useRouter } from "next/navigation";

const MediaSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const cards = [
        {
            title: 'UGA student on digital divide in mental health care and high-speed internet study',
            description: 'Published by: GPB News',
            imageUrl: '/images/media1.png',
            link: 'https://www.gpb.org/news/2024/01/05/uga-student-on-digital-divide-in-mental-health-care-and-high-speed-internet-study',
        },
        {
            title: 'Physicians Are No More Likely to Be Politically Active Than Non-Physicians',
            description: 'Published by: MedPage Today',
            imageUrl: '/images/media3.png',
            link: 'https://www.medpagetoday.com/publichealthpolicy/generalprofessionalissues/109526',
        },
        {
            title: 'Pitt research highlights digital divide in access to virtual mental health care services',
            description: 'Interview by: 90.5 WESA',
            imageUrl: '/images/media1.png',
            link: 'https://www.wesa.fm/health-science-tech/2024-02-05/digital-divide-mental-health-services',
        }
        
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    };
    
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    };
    
    const router = useRouter();
    
    return (
        <div className="bg-blue-200 pt-5 pb-10">
            <SectionHeading title="Highlighted Media"/>
            <div className="mt-5 mx-15 flex flex-col items-center justify-center">
                <div className="relative w-full overflow-hidden">
                    <div className=" flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}  >
                        {cards.map((card, index) => (
                            <div key={index} className="min-w-full flex-shrink p-4 ">
                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, ease: 'easeInOut' }}>
                                    <div className="flex flex-col items-center">
                                        <Image alt={card.title} className=" transition rounded-xl mb-4"
                                            height="300"
                                            width="300"
                                            src={card.imageUrl}
                                        />
                                        <h3 className="text-2xl text-center font-bold mb-2"> {card.title} </h3>
                                        <p className="text-center mb-2 p-2"> {card.description} </p>
                                        <div className="w-full h-full text-center rounded-xl hover:scale-105 transition-transform duration-200">
                                            <button onClick={() => router.push(card.link)} 
                                                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-xl w-1/2 h-full lg:w-1/4">
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                    <div
                        className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4 md:px-40">
                        <button onClick={prevSlide}
                            className="bg-white rounded-full p-2 shadow-md">
                            &#8592;
                        </button>
                        <button onClick={nextSlide}
                            className="bg-white rounded-full p-2 shadow-md ">
                            &#8594;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaSection;