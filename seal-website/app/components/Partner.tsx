'use client';
import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';

interface PartnerProps {
    img: string;
    href: string;
    alt?: string; // This should be the id selector like "#about"

}



const Partner: React.FC<PartnerProps> = ({ img, href, alt }) => {
    return (
        <a href={href} className="mt-10 flex items-center justify-center w-full h-full bg-white rounded-xl transition duration-150 ease-in-out transform hover:scale-125 mt-3 py-2 px-4 text-center font-bold">
            <Image
                alt={alt ? alt : "Partner logo"}
                height={260}
                width={260}
                src={img}
                className="transition-transform duration-150 ease-in-out"
            />
        </a>
    );
} 


export default Partner;