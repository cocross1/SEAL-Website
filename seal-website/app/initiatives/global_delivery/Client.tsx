'use client'
import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import SectionHeading from '@/app/components/SectionHeader';
import Publication from '@/app/components/Publication';

const Client = () => {
    const proj1 = "Project 1: Despite growing engagement in value-based payment reform across the United States, only four alternative payment models (APMs) launched by the Centers for Medicare and Medicaid Services Innovation Center (CMMI) have reduced net spending or improved the quality of patient care. Our team is looking to assess the current state of value-based care in the US, as well as engage with key stakeholders to foster dialogue around how the young professionals can contribute to bending the cost curve in medicine."
    const proj2 = "Project 2: Lower and Middle-Income countries experience disproportionate burden of certain disease, experience barriers to access and utilization, and are often not represented in practice-changing clinical trials. Our team is interested in advocating for epistemological equity for LMICs, fostering partnerships with LMIC institutions to discuss practice change, and understand current barriers to access."
       return (
            <div>
            <SectionHeading title="Assessing Global Care Delivery and CMMI Innovation Agenda" />
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










