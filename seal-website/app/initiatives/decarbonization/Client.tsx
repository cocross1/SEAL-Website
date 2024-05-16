'use client'
import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import SectionHeading from '@/app/components/SectionHeader';
import Publication from '@/app/components/Publication';

const Client = () => {
    const proj = "The climate crisis is the single greatest public health challenge of the 21st century. As a significant contributor to climate change, the healthcare sector faces an urgent call to action to reduce its carbon footprint and protect communities from climate threats. The Biden-Harris Administration has set clear goals for the country to cut greenhouse emissions (GHG) in half in the next 8 years, then move quickly to net zero before 2050, as outlined in the Federal Sustainability Plan. Our team is looking to engage young healthcare professionals in making climate policy a priority among hospitals, clinics, and the broader healthcare community."
    return (
        <div>
        <SectionHeading title="Advocating for Healthcare Decarbonization" />
        <div className="
                 mt-10
                 mx-20
                 grid grid-row-2 
                 gap-4
                 justify-items-center">
                    
              <div className=" text-4xl">
              <div className=" text-4xl underline font-bold text-center">
            Project Details
        </div>
            <div className="mt-10">
                {proj}
                </div>
              </div>


        <div className="">
        <div className="mt-10 text-center text-4xl underline font-bold">
            Publications
        </div>
        <div className="flex flex-row justify-center mt-10 gap-4 pt-5">
        <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full flex justify-center px-5"
                  >

              <Publication img="/images/ahrq.png" href="https://www.ahrq.gov/sites/default/files/wysiwyg/healthsystemsresearch/decarbonization/decarbonization.pdf"/>
              

              </motion.div>
              <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full flex justify-center px-5"
                  >
              <Publication img="/images/catalyst.svg" href="https://catalyst.nejm.org/doi/full/10.1056/CAT.22.0433"/>
              </motion.div>
              
              <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full flex justify-center px-5"
                  >
              <Publication img="/images/ha.jpg" href="https://www.healthaffairs.org/content/forefront/us-healthcare-sector-can-decarbonize-reduce-waste-and-improve-public-health-thoughtful"/>
              </motion.div>
              </div>
              </div>
                </div>
        </div>
    );
};

export default Client;










