'use client'
import React from 'react';
import Heading from './Heading';
import NavbarSection from './navbar/NavbarSection';
import Button from './Button';
import Image from "next/image";
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeader';
import Partner from '@/app/components/Partner';

const PartnersSection = () => {
    return (
        <div className ="pb-10">
        <SectionHeading title="Partners" />
        <div className="
                 mt-5
                 mx-20
                 grid grid-cols-3 
                 gap-4
                 items-center
                 justify-items-center">
              <div className=" text-4xl">
              <Partner img="/images/project-heal.png" href="https://www.hackensackmeridianhealth.org/en/project-heal"/>
              </div>
              <div className=" text-4xl">
              <Partner img="/images/healthier-democracy.png" href="https://ahealthierdemocracy.org/"/>
              </div>
              <div className=" text-4xl">
              <Partner img="/images/healthcare-improvement.png" href="https://www.ihi.org/"/>
              </div>
                </div>
                </div>
    );
};

export default PartnersSection;