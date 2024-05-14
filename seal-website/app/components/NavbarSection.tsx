'use client';
import React from 'react';
import { useRouter } from "next/navigation";

interface NavbarSectionProps {
    title: string;
    href?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const scrollToSection = (id: string) => {
    const sectionId = id.startsWith('#') ? id.substring(1) : id;
    const section = document.getElementById(sectionId);
    const navbarHeight = 180; // Height of your navbar, adjust accordingly

    if (section) {
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

const NavbarSection: React.FC<NavbarSectionProps> = ({ title, href, onClick }) => {
    const router = useRouter();

    const navigateToHome = () => {
        return new Promise<void>((resolve) => {
            router.push('/');
            resolve();
        });
    };

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();

        if (href) {
            if (window.location.pathname !== '/') {
                navigateToHome().then(() => {
                    // Delay the scrollToSection call to ensure the navigation is complete
                    setTimeout(() => scrollToSection(href), 100);
                });

                
            } else {
                scrollToSection(href);
            }
        }
    };

    if (href) {
        return (
            <a href={href} onClick={handleClick} className="text-center p-5 justify-center md:block cursor-pointer hover:bg-gray-300 transition rounded-xl">
                <div className='text-2xl font-bold text-center'>
                    {title}
                </div>
            </a>
        );
    } 

    if (onClick) {
        return (
            <button onClick={onClick} className="text-center p-5 justify-center md:block cursor-pointer hover:bg-gray-300 transition rounded-xl">
                <div className='text-2xl font-bold text-center'>
                    {title}
                </div>
            </button>
        );
    }

    return null; // Ensure the component returns null if neither href nor onClick is provided
}

export default NavbarSection;
