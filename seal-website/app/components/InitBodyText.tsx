'use client';
import { Be_Vietnam_Pro} from "next/font/google";
import React from 'react'
import { BiBold } from "react-icons/bi";

interface InitBodyProps{
    text: string,
    center?: boolean;
}

const font = Be_Vietnam_Pro({
  weight:'200',
  display: 'swap',
  subsets: ['latin']
});

const InitBody: React.FC<InitBodyProps> = ({ text, center }) => {
  return (
    <div className={center ? 'text-left' : 'text-left'}>
      <div className={` ${font.className}`}>
        <div className="text-lg xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl">
          {text}
        </div>
      </div>
      </div>
  );
};

export default InitBody;
