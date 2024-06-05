'use client'
import React from 'react';
//import Heading from './Heading';
import NavbarSection from './navbar/NavbarSection';
import Button from './Button';
import SectionHeading from './SectionHeader';
import SubHeader from './SubHeader';

const HeroSection = () => {
    return (
        
        <div className="relative h-screen">
            
            <video autoPlay muted loop className="absolute w-full h-full object-cover">
                <source src="/videos/stock footage.mp4" type="video/mp4" />
                Your browser does not support the videos in this format.
            </video>
            
            <div className="absolute w-full h-full bg-blue-600 opacity-50"></div>
            <div className="absolute w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
                <div className = "text-white"> <SectionHeading title="S.E.A.L." /> </div>
                <div className="text-white"> <SubHeader text="Social Equity Action Lab" /></div>
                <p className="text-white text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-5xl pt-5">
                    Researching and solving the world’s pressing health, social, and economic problems through a youth-driven movement.
                </p>
                <div className="mt-10">
                    <Button title="Learn More" href="#about" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;