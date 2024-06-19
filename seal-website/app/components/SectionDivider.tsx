'use client';
import { Inria_Serif } from 'next/font/google';
import React from 'react';

interface SectDivProps {
  text: string;
  center?: boolean;
}

const font = Inria_Serif({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
});

const SectionDivider: React.FC<SectDivProps> = ({ text, center }) => {
  return (
    <div className={`w-full ${center ? 'text-center' : 'text-start'}`}>
      <div className={`flex items-center justify-center my-10 ${font.className}`}>
        <div className="flex-grow border-b-4 border-blue-900 mx-5"></div>
        <div className="text-4xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl mx-5">
          {text}
        </div>
        <div className="flex-grow border-b-4 border-blue-900 mx-5"></div>
      </div>
    </div>
  );
};

export default SectionDivider;
