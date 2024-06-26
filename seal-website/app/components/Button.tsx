'use client';
import React from 'react';

interface ButtonProps {
    title: string;
    href?: string; // This should be the id selector like "#about"

}
const scrollToSection = (id: string) => {
    // Remove the leading "#" to use it as an id
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


const Button: React.FC<ButtonProps> = ({ title, href }) => {
    if(href){
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault(); // Prevent the default anchor behavior
        scrollToSection(href); // Use the href as the id to scroll to
    };

    return (
        <a href={href} onClick={handleClick} className="inline-block bg-gray-200 text-black font-bold py-2 px-4 rounded hover:bg-blue-300 transition duration-150 ease-in-out text-center text-2xl transform hover:scale-125">
            <div className='text-2xl font-bold text-center'>
                {title}
            </div>
        </a>
    );
} else{
    return <div></div>
}
}

export default Button;