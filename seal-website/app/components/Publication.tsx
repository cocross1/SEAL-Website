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
        <a href={href} className="mt-10 flex items-center justify-center w-full h-full bg-gray-200 rounded-xl hover:bg-blue-300 transition duration-150 ease-in-out transform hover:scale-125 mt-3 py-2 px-4 text-center text-2xl font-bold">
            {/*       className="px-5 flex flex-col text-white gap-2 w-full overflow-hidden mt-10 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-200"
 */}
            <Image
                alt={alt ? alt : "Publication"}
                height={400}
                width={400}
                src={img}
                className="transition-transform duration-150 ease-in-out"
            />
        </a>
    );
} 


export default Publication;