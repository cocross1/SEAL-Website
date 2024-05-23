'use client'
import React from 'react';
import Heading from './Heading';
import NavbarSection from './navbar/NavbarSection';
import Button from './Button';

const HeroSection = () => {
    return (
        
        <div className="relative h-screen">
            
            <video autoPlay muted loop className="absolute w-full h-full object-cover">
                <source src="/videos/stock footage.mp4" type="video/mp4" />
                Your browser does not support the videos in this format.
            </video>
            
            <div className="absolute w-full h-full bg-blue-600 opacity-50"></div>
            <div className="absolute w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
                <h1 className="text-white text-6xl md:text-8xl font-bold ">S.E.A.L.</h1>
                <h6 className="text-white text-3xl md:text-4xl ">Social Equity Action Lab</h6>
                <p className="text-white text-lg md:text-5xl mt-8 px-20 mt-10 xl:px-36">
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