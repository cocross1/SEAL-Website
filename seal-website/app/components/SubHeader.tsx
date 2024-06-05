'use client';
import { Be_Vietnam_Pro} from "next/font/google";
import React from 'react'
import { BiBold } from "react-icons/bi";

interface SubHeadingProps{
    text: string,
    center?: boolean;
}

const font = Be_Vietnam_Pro({
  weight:'300',
  display: 'swap',
  subsets: ['latin']
});



const SubHeading: React.FC<SubHeadingProps> = ({text, center}) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
        <div className={font.className}>
        <div className='text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-center'>
            {text}
        </div>
        </div>
    </div>
  )
}

export default SubHeading