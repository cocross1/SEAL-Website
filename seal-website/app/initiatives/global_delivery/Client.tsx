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
            <InitHeader title="Assessing Global Care Delivery and CMMI Innovation Agenda" />
            <div className="
          mt-10
          mx-10
          grid gap-4
          justify-items-center
          grid grid-cols-1 md:grid-cols-2">
          <div className="grid grid-rows gap-4">
            <InitBody text="Low- and middle-income countries (LMICs) experience disproportionate burden of certain disease, experience barriers to access and utilization, and are often not represented in practice-changing clinical trials…."/>
            <InitBody text="As a result, we are forming partnerships with institutions in LMICs to research and advocate for access to innovative, life-saving therapies. "/>
            <InitBody text="First, we are researching opportunities to improve access and implementation of practice-changing clinical trials in lower-resourced settings. Findings from our research will help policymakers and clinicians devise relevant clinical trials and regulatory mechanisms that will advance population health. "/>
            <InitBody text="Second, we are working directly with clinicians in Philippines, India, and other LMICs to author a white paper to be published in 2025 depicting a framework to deliver high-value care in each respective country."/>
            <InitBody text="Third, we are conducting epidemiological studies to estimate disease burden for various communicable and noncommunicable diseases in different parts of the world. The results of these studies can help policymakers in creating national disease prevention and response agendas.  "/>
          </div>
          <div>
          <div className="flex justify-center items-center">
            <Image alt="Emissions figure" 
            className="transition rounded-xl"
            height="500"
            width="500"
            src="/images/GCD-fig1.png"/>
          </div>
          <div className="flex justify-center items-center">
            <Image alt="Emissions figure" 
            className="transition rounded-xl"
            height="500"
            width="500"
            src="/images/GCD-fig2.png"/>
          </div>
          </div>
        </div>

        <SectionDivider text="Publications"/>
        
            <div className="
                 mt-10
                 mx-20
                 grid grid-row-2 
                 gap-4
                 justify-items-center">
                        
            
            <div>
            
            
        
        <div className="flex flex-row pt-5 grid
               grid-cols-1 md:grid-cols-2 lg:grid-cols-3
               gap-6">
            
            <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="w-full flex justify-center px-5"
                      >
    
                  <Publication img="/images/jnci.svg" href="https://academic.oup.com/jnci/article/115/2/125/6760235"/>
                
                  </motion.div>
                  <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="w-full flex justify-center px-5"
                      >
                  <Publication img="/images/ajmc.png" href="https://www.ajmc.com/view/value-realization-an-unattained-challenge-for-integrated-practice-units"/>
                  </motion.div>
                  <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="w-full flex justify-center px-5"
                      >
                  <Publication img="/images/mp.png" href="https://journals.lww.com/jphmp/citation/2023/03000/community_paramedicine__an_innovative_model_for.27.aspx#:~:text=Community%20paramedicine%20can%20truly%20be,point%20in%20their%20health%20journey."/>
                  </motion.div>
                  <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="w-full flex justify-center px-5"
                      >
                  <Publication img="/images/nature.svg" href="https://www.nature.com/articles/d41591-023-00020-y"/>
                  </motion.div>
                  <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="w-full flex justify-center px-5"
                      >
                  <Publication img="/images/acs.png" href="https://acsjournals.onlinelibrary.wiley.com/doi/full/10.1002/cncr.34674"/>
                  </motion.div>
                  </div>
                  </div>
                    </div>
            </div>
    );
};

export default Client;










