'use client'
import React from 'react';
import Heading from './Heading';
import NavbarSection from './navbar/NavbarSection';
import Button from './Button';
import Image from "next/image";
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeader';

const AboutSection = () => {
    return (
        <div className ="pb-10">
        <SectionHeading title="About" />
        <div className="
                 mt-5
                 mx-20
                 grid grid-cols-2 
                 gap-4
                 items-center
                 justify-items-center">
              <div className=" text-4xl">
              A policy think-tank striving to create a forum of students and young professionals who are passionate about addressing systemic healthcare problems through legislation and policy making.


              </div>


        <div className="h-full">
        <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >

                            <Image 
                alt="Logo"
                className="
                transition rounded-xl items mt-10"
                height="400"
                width="400"
              src="/images/logo.png"/>
              </motion.div>
              </div>
                </div>
                </div>
    );
};

export default AboutSection;










