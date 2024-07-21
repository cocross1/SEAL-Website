'use client';
import { Inria_Serif } from "next/font/google";
import React from 'react';

interface HeroTextProps {
    text: string,
    className?: string,
}

const font = Inria_Serif({
    weight: '400',
    display: 'swap',
    subsets: ['latin']
});

const HeroText: React.FC<HeroTextProps> = ({ text, className = '' }) => {
    return (
        <div className={`${font.className} ${className}`}>
            <div className="text-left">
                {text}
            </div>
        </div>
    )
}

export default HeroText;
