'use client'
import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import Publication from '@/app/components/Publication';
import InitHeader from  '@/app/components/InitHeader';
import InitLabel from '@/app/components/InitLabel';
import InitBody from '@/app/components/InitBodyText';
import SectionDivider from '@/app/components/SectionDivider';

const Client = () => {
    return (
        <div>
        <InitLabel title="Initiatives" />
        <InitHeader title="Adressing Mental Health and the Digital Divide" />
        <div className="
          mt-10
          mx-10
          grid gap-4
          justify-items-center
          grid grid-cols-1 md:grid-cols-2">
          <div className="grid grid-rows gap-4">
            <InitBody text="1 out of every 4 people will be impacted by mental illness at some point in their lives…"/>
            <InitBody text="and we are studying how to expand access to much-needed care by improving screening and filling provider shortages."/>
            <InitBody text="First, we are collaborating with universities to expand access to mental health screening. In 2024, we published a whitepaper that assesses the current landscape of mental health screening tools available to college campuses and considerations to account for when implementing them. We are now working with our national partners to engender student advocacy across universities to implement standardized mental health screening."/>
            <InitBody text="Second, we are researching opportunities to improve access to mental health care through new models of care, such as digital health and telehealth. Studying care models across the world will lend insight to policymakers and stakeholders on best practices to expand mental health access."/>
            <InitBody text="Third, we are using national and global data to draw connections between common chronic conditions and mental health disorders, including for cancer and chronic obstructive pulmonary disease."/>
            </div>
          <div>
          <div className="flex justify-center items-center">
            <Image alt="Emissions figure" 
            className="transition rounded-xl"
            height="500"
            width="500"
            src="/images/MH-fig1.png"/>
          </div>
          <Image alt="Emissions figure" 
            className="transition rounded-xl"
            height="500"
            width="500"
            src="/images/MH-fig2.png"/>
        </div>
        </div>
        <SectionDivider text="Publications"/>
        <div>
        <div className="flex flex-row pt-5 grid
               grid-cols-1 md:grid-cols-2 lg:grid-cols-3
               gap-6 pb-10">
        <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    className="w-full flex justify-center px-5 items-center"
                  >

              <Publication img="/images/nature mental.svg" href="https://www.nature.com/articles/s44220-023-00176-z"/>
              

              </motion.div>
              <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    className="w-full flex justify-center px-5 items-center"
                  >
              <Publication img="/images/asco.svg" href="https://ascopubs.org/doi/10.1200/OP.22.00740?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200pubmed"/>
              </motion.div>
              
              <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    className="w-full flex justify-center px-5 items-center"
                  >
              <Publication img="/images/smith.png" href="https://www.smithsonianmag.com/science-nature/can-digital-psychiatry-really-fill-the-mental-health-care-gap-180982168/"/>
              </motion.div>
              <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    className="w-full flex justify-center px-5 items-center"
                  >
              <Publication img="/images/forbes.png" href="https://www.forbes.com/sites/tmobile/2021/05/03/how-one-high-school-student-is-bridging-the-digital-divide/?sh=62c3febc1c31"/>
              </motion.div>
              <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    className="w-full flex justify-center px-5 items-center"
                  >
              <Publication img="/images/springer.svg" href="https://link.springer.com/article/10.1007/s11606-023-08273-6"/>
              </motion.div>
              </div>
              </div>
                </div>
      
);
};

export default Client;










