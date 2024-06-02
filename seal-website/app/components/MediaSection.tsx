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
            title: 'NPR Article',
            description: 'This can be a headline, or any intriguing sentence to make someone want to read more',
            imageUrl: '/images/mediaplaceholder.jpg',
            link: 'https://www.npr.org/',
        },
        {
            title: 'Card 2',
            description: 'Description for card 2',
            imageUrl: '/images/mediaplaceholder.jpg',
            link: ' https://www.upenn.edu/',
        },
        {
            title: 'Card 3',
            description: 'Description for card 3',
            imageUrl: '/images/mediaplaceholder.jpg',
            link: 'https://www.stanford.edu/',
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
            <div className="mt-5 mx-20 flex flex-col items-center justify-center">
                <div className="relative w-full overflow-hidden">
                    <div className=" flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}  >
                        {cards.map((card, index) => (
                            <div key={index} className="min-w-full flex-shrink-0 p-4 ">
                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                                >
                                    <div className="flex flex-col items-center">
                                        <Image alt={card.title} className=" transition rounded-xl mb-4"
                                            height="300"
                                            width="300"
                                            src={card.imageUrl}
                                        />
                                        <h3 className="text-2xl font-bold mb-2">
                                            {card.title}
                                        </h3>
                                        <p
                                            className="text-center p-2">
                                            {card.description}
                                        </p>
                                        <div className="w-full h-full text-center rounded-xl hover:scale-105 transition-transform duration-200">
                                            <button
                                                onClick={() => router.push(card.link)}
                                                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-xl w-1/2 h-full lg:w-1/4"
                                            >
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                    <div
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full flex justify-between px-4">
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