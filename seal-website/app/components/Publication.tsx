'use client';
import React from 'react';
import Image from "next/image";

interface PublicationProps {
    img: string;
    href: string;
    alt?: string; // This should be the id selector like "#about"
}

const Publication: React.FC<PublicationProps> = ({ img, href, alt }) => {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-10 flex items-center justify-center w-5/6 h-full bg-blue-200 rounded-xl hover:bg-blue-300 transition duration-150 ease-in-out transform hover:scale-110 mt-3 py-2 px-4 text-center text-xl font-bold"
        >
            <Image
                alt={alt ? alt : "Publication"}
                height={300}  // Reduced height
                width={300}   // Reduced width
                src={img}
                className="transition-transform duration-150 ease-in-out"
            />
        </a>
    );
}

export default Publication;
