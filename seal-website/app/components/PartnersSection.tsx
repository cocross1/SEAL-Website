'use client'
import React from 'react';
//import Heading from './Heading';
import NavbarSection from './navbar/NavbarSection';
import Button from './Button';
import Image from "next/image";
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeader';
import Partner from '@/app/components/Partner';

const PartnersSection = () => {
    return (
        <div className ="pb-10">
            <div className ="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
            <SectionHeading title=" Our Partners" />
            </div>
            <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <div className="
                 mt-5
                 mx-20
                 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3
                 gap-4
                 items-center
                 justify-items-center">
              <Partner img="/images/project-heal.png" href="https://www.hackensackmeridianhealth.org/en/project-heal"/>
              <Partner img="/images/healthier-democracy.png" href="https://ahealthierdemocracy.org/"/>
              <Partner img="/images/healthcare-improvement.png" href="https://www.ihi.org/"/>
                </div>
              </motion.div>
        
                </div>
    );
};

export default PartnersSection;