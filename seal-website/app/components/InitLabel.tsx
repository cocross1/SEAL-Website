'use client';
import { Inria_Serif } from 'next/font/google';
import React from 'react';

interface InitLabelProps {
  title: string;
  center?: boolean;
}

const font = Inria_Serif({
  weight: '300',
  display: 'swap',
  subsets: ['latin'],
});

const InitLabel: React.FC<InitLabelProps> = ({ title, center }) => {
  return (
    <div className={center ? 'text-right' : 'text-right'}>
      <div className={`bg-blue-900 p-2 pr-5 mt-10 mb-5 ${font.className}`}>
        <div className="text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-white">
          {title}
        </div>
      </div>
    </div>
  );
};

export default InitLabel;
