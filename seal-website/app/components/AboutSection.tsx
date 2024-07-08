'use client'
import React from 'react';
// import Heading from './Heading';
import NavbarSection from './navbar/NavbarSection';
import Button from './Button';
import Image from "next/image";
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeader';

const AboutSection = () => {
    return (
        <div className="pb-20 grid">
            <div className="mt-5 mx-20 grid grid-cols-[60%_40%] gap-4 items-center justify-items-center">
                <SectionHeading title="About" />
                <div className="h-full row-span-3">
                    <motion.div
                        initial={{ y: 70, opacity: 0 }}
                        whileInView={{ y: 20, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        <Image
                            alt="Logo"
                            className="transition rounded-xl items pt-50"
                            height="420"
                            width="420"
                            src="/images/logo.png"
                            // style={{ marginTop: "0px" }} 
                        />
                    </motion.div>
                </div>
                <div className="text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl">
                    A policy think-tank striving to create a forum of students and young professionals who are passionate about addressing systemic healthcare problems through legislation and policy making.
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
