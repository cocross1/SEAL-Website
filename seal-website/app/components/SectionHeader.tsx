
'use client';
import React from 'react'

interface SectionHeadingProps{
    title: string,
    subtitle?: string;
    center?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({title, subtitle, center}) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
        
        <div className='text-5xl font-bold text-center mt-20'>
            {title}
        </div>
        <div className = "font-light text-neutral-500 mt-2">
            {subtitle}
        </div>
    </div>
  )
}

export default SectionHeading