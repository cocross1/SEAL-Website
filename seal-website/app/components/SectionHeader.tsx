'use client';
import { Inter, Nunito, Lato, Playfair_Display, Be_Vietnam_Pro} from "next/font/google";
import React from 'react'
import { BiBold } from "react-icons/bi";

interface SectionHeadingProps{
    title: string,
    subtitle?: string;
    center?: boolean;
}

const font = Nunito({
  //style: 'bold',
  weight:'600',
  display: 'swap',
  subsets: ['latin']
});



const SectionHeading: React.FC<SectionHeadingProps> = ({title, subtitle, center}) => {
  return (
    
    <div className={center ? 'text-center' : 'text-start'}>
        <div className={font.className}>
        <div className='text-8xl font-bold text-center mt-20'>
            {title}
        </div>
        </div>
        <div className = "font-light text-neutral-500 mt-2">
            {subtitle}
        </div>
    </div>
  )
}

export default SectionHeading