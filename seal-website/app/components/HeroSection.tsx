'use client'
import React from 'react';
import HeroText from './HeroText';
import Button from './Button';

const HeroSection = () => {
    return (
        <div className="relative h-screen">
            <video autoPlay muted loop className="absolute w-full h-5/6 object-cover">
                <source src="/videos/stock footage.mp4" type="video/mp4" />
                Your browser does not support the videos in this format.
            </video>
            
            <div className="absolute w-full h-5/6 bg-blue-900 opacity-70"></div>
            <div className="absolute w-full h-5/6 bg-black bg-opacity-50 flex flex-col px-4">
                <div>
                    <div className="text-white text-6xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl">
                        <HeroText text="S.E.A.L." />
                    </div>
                    <div className="text-white text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-5xl pb-40">
                        <HeroText text="Social Equity Action Lab" />
                    </div>
                    
                    <div className="text-white text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl mt-40">
                        <HeroText text="Researching and solving the world’s pressing health, social, and economic problems through a youth-driven movement." />
                    </div>
                    <div className="mt-10">
                        <Button title="Learn More" href="#about" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
