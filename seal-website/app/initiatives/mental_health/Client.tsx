'use client'
import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import SectionHeading from '@/app/components/SectionHeader';
import Publication from '@/app/components/Publication';

const Client = () => {
    const proj1 = "Project 1: Currently working on a white paper that would assess the current landscape of mental health screening and the need for a framework and further change, followed by a framework that would guide universities through the intricate process of screening tools. We hope to create a ground-up approach where students on campuses (through campus organizations like Active Minds) can advocate for change in their school’s current resources for mental health. The ultimate goal through these measures is to accelerate the dissemination of resources and information to be adopted across numerous starting from the ground up. We are currently in active collaboration with the Mary Christie Institute, and are continuing conversations with Active Minds and Penn State Collegiate Center on Mental Health."
    const proj2 = "Project 2: Telemedicine has greatly improved mental healthcare access worldwide, particularly following the COVID-19 pandemic. However, the growing reliance on broadband internet-based mental health care raises concerns surrounding telemedicine’s accessibility in communities already facing barriers in seeking mental health information and care. Our goal is to create provisions for mental health support in current broadband legislation, such as the Affordable Connectivity Program."
    return (
        <div>
        <SectionHeading title="Adressing Mental Health and the Digital Divide" />
        <div className="
                 mt-10
                 mx-20
                 grid grid-row-2 
                 gap-4
                 justify-items-center">
                    
              <div className=" text-4xl">
              <div className=" text-4xl underline font-bold text-center">
            Initiative Projects
        </div>
            <div className="mt-10">
                {proj1}
                </div>
                <div className="mt-10">
                {proj2}
                </div>
              </div>


        <div className="">
        <div className="mt-10 text-center text-4xl underline font-bold">
            Publications
        </div>
        <div className="flex flex-row">
        <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full flex justify-center px-5 items-center"
                  >

              <Publication img="/images/nature mental.svg" href="https://www.nature.com/articles/s44220-023-00176-z"/>
              

              </motion.div>
              <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full flex justify-center px-5 items-center"
                  >
              <Publication img="/images/asco.svg" href="https://ascopubs.org/doi/10.1200/OP.22.00740?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200pubmed"/>
              </motion.div>
              
              <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full flex justify-center px-5 items-center"
                  >
              <Publication img="/images/smith.png" href="https://www.smithsonianmag.com/science-nature/can-digital-psychiatry-really-fill-the-mental-health-care-gap-180982168/"/>
              </motion.div>
              <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full flex justify-center px-5 items-center"
                  >
              <Publication img="/images/forbes.png" href="https://www.forbes.com/sites/tmobile/2021/05/03/how-one-high-school-student-is-bridging-the-digital-divide/?sh=62c3febc1c31"/>
              </motion.div>
              <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full flex justify-center px-5 items-center"
                  >
              <Publication img="/images/springer.svg" href="https://link.springer.com/article/10.1007/s11606-023-08273-6"/>
              </motion.div>
              </div>
              </div>
                </div>
        </div>
);
};

export default Client;










