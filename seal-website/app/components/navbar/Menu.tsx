'use client';
import React, { useCallback, useState, useEffect, useRef } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import MenuItem from './MenuItem';
import { useRouter } from 'next/navigation';
import useContact from '@/app/hooks/useContact';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const contactModal = useContact();

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="relative" ref={menuRef}>
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
                    w-auto   /* Changed from fixed width to auto */
                    h-auto
                    md:w-56  /* Slightly wider on medium screens */
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
                                 href="#about"
                                label="About"
                            />
                             <MenuItem
                                 href="#initiatives"
                                label="Initiatives"
                            />
                            <MenuItem
                                onClick={() => router.push('/team')}
                                label="Team"
                            />
                            <MenuItem
                                href="#partners"
                                label="Partners"
                            />
                            <MenuItem
                                href="#media"
                                label="Media"
                            />
                            <MenuItem
                                href="#events"
                                label="Events"
                            />
                            <MenuItem
                                href="#connect"
                                label="Connect"
                            />
                            <MenuItem
                                onClick={contactModal.onOpen}
                                label="Contact Us"
                            />
                        </>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Menu;
