'use client';
import { Inria_Serif } from 'next/font/google';
import React from 'react';

interface InitHeaderProps {
  title: string;
  center?: boolean;
}

const font = Inria_Serif({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
});

const InitHeader: React.FC<InitHeaderProps> = ({ title, center }) => {
  return (
    <div className={center ? 'text-left' : 'text-start'}>
      <div className={`bg-blue-100 p-10 mt-5 mb-10 ${font.className}`}>
        <div className="text-4xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl">
          {title}
        </div>
      </div>
      </div>
  );
};

export default InitHeader;
