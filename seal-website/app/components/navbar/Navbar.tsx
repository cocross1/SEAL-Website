'use client';

import React from 'react'
import Container from '../Container'
import Logo from './Logo'
// components/Navbar.js
import Link from 'next/link';
import Menu from './menu';
import Heading from '../Heading';
import NavbarSection from '../NavbarSection';
import ClientOnly from '../ClientOnly';

// const Navbar = ({}) => {
//   return (
//     <div className="fixed w-full bg-purple-100 z-10 shadow-sm">
        
//         <div className="py-4 border-b-[1px]">
//             <Container>
//                 <div className= " flex flex-row items-center justify-between gap-3 md:gap-0">
//                     <Logo />
                    
//                 </div>
                
//             </Container>
//         </div>
//     </div>
//   )
// }

// export default Navbar

const Navbar = () => {
  return (

    <div className="fixed w-full bg-gray-200 p-1 z-10 shadow-sm ">
        
    <div className="py-4 border-b-[1px]">
        <Container>
            <div className= " flex w-full flex-row items-center justify-between gap-3 md:gap-0">
                <Logo />
                <NavbarSection title="About" href="#about" />
                        <NavbarSection title="Initiatives" href="#initiatives" />
                        <NavbarSection title="Team" href="#team" />
                        <NavbarSection title="Partners" href="#partners" />
                        <NavbarSection title="Media" href="#media" />
                        <NavbarSection title="Contact Us" href="#contact" />
                        <NavbarSection title="Mailing List" href="#mailing-list" />
                        <Menu />
                
            </div>
            
        </Container>
    </div>
</div>

  );
};

export default Navbar;