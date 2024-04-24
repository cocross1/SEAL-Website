'use client';
// added upcoming reservations functionality

import React, { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import MenuItem from './MenuItem';
import { useRouter } from 'next/router'; // Corrected import

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
        
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div onClick={toggleOpen}
                    className="
                        bg-gray-800 
                        p-4
                        md:py-2     
                        md:px-3     
                        border-[1px]
                        border-neutral-300 
                        flex
                        flex-row
                        items-center
                        gap-3
                        rounded-full
                        cursor-pointer
                        hover:shadow-md
                        transition
                        text-white   
                    ">
                    <AiOutlineMenu size={24}/>  
                </div>
            </div>
            {isOpen && (
                <div className="
                    absolute
                    rounded-xl
                    shadow-lg 
                    w-full   
                    md:w-40
                    lg:w-40
                    bg-white
                    overflow-hidden
                    right-0
                    top-12
                    text-sm   
                    z-50 
                    text-black
                    text-center      
                ">
                    <div className="flex flex-col cursor-pointer opacity-100">
                        <>
                            <MenuItem
                                onClick={() => {}}
                                label="About"
                                
                            />
                             <MenuItem
                                onClick={() => {}}
                                label="Initiatives"
                                
                            />
                            <MenuItem
                                onClick={() => {}}
                                label="Team"
                                
                            />
                            <MenuItem
                                onClick={() => {}}
                                label="Partners"
                                
                            />
                            <MenuItem
                                onClick={() => {}}
                                label="Media"
                                
                            />
                            

                           
                            {/* Add more MenuItem components as needed */}
                        </>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Menu;