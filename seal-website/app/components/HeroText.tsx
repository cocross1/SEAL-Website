'use client';
import { Inria_Serif } from "next/font/google";
import React from 'react'
import { BiBold } from "react-icons/bi";

interface HeroTextProps {
    text: string,
}

const font = Inria_Serif({
    weight: '400',
    display: 'swap',
    subsets: ['latin']
});



const HeroText: React.FC<HeroTextProps> = ({ text }) => {
    return (
        <div className={font.className}>
            <div className="center-left">
                {text}
            </div>
        </div>
    )
}

export default HeroText