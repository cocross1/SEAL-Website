'use client';
import {Inria_Serif} from "next/font/google";
import React from 'react'
import { BiBold } from "react-icons/bi";

interface SectionHeadingProps{
    title: string,
    center?: boolean;
}

const font = Inria_Serif({
  weight:'400',
  display: 'swap',
  subsets: ['latin']
});



const SectionHeading: React.FC<SectionHeadingProps> = ({title, center}) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
        <div className={font.className}>
        <div className='text-5xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl  text-center mt-10 mb-5'>
            {title}
        </div>
        </div>
    </div>
  )
}

export default SectionHeading