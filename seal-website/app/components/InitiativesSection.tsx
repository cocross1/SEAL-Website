'use client'
import React from 'react';
import Heading from './Heading';
import NavbarSection from './navbar/NavbarSection';
import Button from './Button';
import Image from "next/image";
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeader';
import InitiativeCard from './InitiativeCard';

const InitiativesSection = () => {
    const body1 = "Project 1: Currently working on a white paper that would assess the current landscape of mental health screening and the need for a framework and further change, followed by a framework that would guide universities through the intricate process of screening tools. We hope to create a ground-up approach where students on campuses (through campus organizations like Active Minds) can advocate for change in their school’s current resources for mental health. The ultimate goal through these measures is to accelerate the dissemination of resources and information to be adopted across numerous starting from the ground up. We are currently in active collaboration with the Mary Christie Institute, and are continuing conversations with Active Minds and Penn State Collegiate Center on Mental Health."
    const body1proj2 = "Project 2: Telemedicine has greatly improved mental healthcare access worldwide, particularly following the COVID-19 pandemic. However, the growing reliance on broadband internet-based mental health care raises concerns surrounding telemedicine’s accessibility in communities already facing barriers in seeking mental health information and care. Our goal is to create provisions for mental health support in current broadband legislation, such as the Affordable Connectivity Program."
    const body2 = "Project 1: Despite growing engagement in value-based payment reform across the United States, only four alternative payment models (APMs) launched by the Centers for Medicare and Medicaid Services Innovation Center (CMMI) have reduced net spending or improved the quality of patient care. Our team is looking to assess the current state of value-based care in the US, as well as engage with key stakeholders to foster dialogue around how the young professionals can contribute to bending the cost curve in medicine."
    const body2proj1 = "Project 2: Lower and Middle-Income countries experience disproportionate burden of certain disease, experience barriers to access and utilization, and are often not represented in practice-changing clinical trials. Our team is interested in advocating for epistemological equity for LMICs, fostering partnerships with LMIC institutions to discuss practice change, and understand current barriers to access."
    const body3 = " The climate crisis is the single greatest public health challenge of the 21st century. As a significant contributor to climate change, the healthcare sector faces an urgent call to action to reduce its carbon footprint and protect communities from climate threats. The Biden-Harris Administration has set clear goals for the country to cut greenhouse emissions (GHG) in half in the next 8 years, then move quickly to net zero before 2050, as outlined in the Federal Sustainability Plan. Our team is looking to engage young healthcare professionals in making climate policy a priority among hospitals, clinics, and the broader healthcare community."
    const body4 = "Focus on creating policy briefs for all of the above projects as well as other salient ideas. This team will meet with all of the other project committees to distill findings from our reports, interviews with key opinion leaders, and general information sessions into tangible briefs that can be disseminated to policymakers at both a local and national scale."
    return (
      <div className="bg-blue-200 pt-5 pb-20">
        <SectionHeading title="Initiatives" />
        <div className="
                 mt-5
                 mx-20
                 grid grid-cols-2 
                 gap-4
                 items-center
                 justify-items-center">

        <div className="bg-blue-900 w-full h-full mt-10 rounded-xl">
        <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <InitiativeCard link="/initiatives/mental_health" title="Addressing Mental Health and the Digital Divide" imageSrc="/placeholder.png" body={[body1,body1proj2]}/>
                    

              </motion.div>
              </div>
              <div className="bg-blue-900 w-full h-full mt-10 rounded-xl">
        <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <InitiativeCard link="/initiatives/decarbonization" title="Advocating for Healthcare Decarbonization" imageSrc="/placeholder.png" body={[body2, body2proj1]}/>
                    

              </motion.div>
              </div>
              <div className="bg-blue-900 w-full h-full mt-10 rounded-xl">
        <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <InitiativeCard link="/initiatives/global_delivery" title="Assessing Global Care Delivery" imageSrc="/placeholder.png" body={[body3]}/>
                    

              </motion.div>
              </div>
              <div className="bg-blue-900 w-full h-full mt-10 rounded-xl">
        <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <InitiativeCard link="/initiatives/legislation" title="Crafting Healthcare Legislation" imageSrc="/placeholder.png" body={[body4]}/>
                    

              </motion.div>
              </div>
            </div>
         </div>
    );
};

export default InitiativesSection;