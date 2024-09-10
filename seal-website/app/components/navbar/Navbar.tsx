'use client';

import React from 'react';
import Container from '../Container';
import Logo from './Logo';
import Link from 'next/link';
import Menu from './Menu';
// import Heading from '../Heading';
import NavbarSection from './NavbarSection';
import ClientOnly from '../ClientOnly';
import { useRouter } from "next/navigation";
import useContact from '@/app/hooks/useContact';

const Navbar = () => {
  const router = useRouter();
  const contactModal = useContact();
  return (
    <div className="fixed w-full h-100 bg-gray-200 p-1 z-10 shadow-sm">
      <div className="py-1 border-b-[1px]">
        <Container>
          <div className="flex w-full flex-row items-center justify-between gap-3 2xl:flex">
            <Logo />
            <div className="hidden 2xl:flex space-x-4">
              <NavbarSection title="About" href="#about" />
              <NavbarSection title="Initiatives" href="#initiatives" />
              <NavbarSection title="Team" onClick={() => router.push('/team')} />
              <NavbarSection title="Partners" href="#partners" />
              <NavbarSection title="Media" href="#media" />
              <NavbarSection title="Events" href="#events" />
              <NavbarSection title="Connect" href="#connect" />
              <NavbarSection title="Contact Us" onClick={() => { contactModal.onOpen() }} />
            </div>
            <div className="flex 2xl:hidden">
              <Menu />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;