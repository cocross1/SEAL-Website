'use client'
import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import Publication from '@/app/components/Publication';
import InitHeader from  '@/app/components/InitHeader';
import InitLabel from '@/app/components/InitLabel';
import InitBody from '@/app/components/InitBodyText';


const Client = () => {
    //const proj = "Focus on creating policy briefs for all of the above projects as well as other salient ideas. This team will meet with all of the other project committees to distill findings from our reports, interviews with key opinion leaders, and general information sessions into tangible briefs that can be disseminated to policymakers at both a local and national scale."
    return (
        <div>
        <InitLabel title="Initiatives" />
        <InitHeader title="Value-Based Care in the U.S. and Payment Reform" />
        <div className="
          mt-10
          mx-10
          grid gap-4
          justify-items-center
          grid grid-cols-1 md:grid-cols-2">
          <div className="grid grid-rows-1 gap-4">
             <InitBody text="Despite growing engagement in value-based payment reform across the United States, only four alternative payment models (APMs) launched by the Centers for Medicare and Medicaid Services Innovation Center (CMMI) have reduced net spending or improved the quality of patient care…"/>
             <InitBody text="Our team is looking to assess the current state of value-based care in the US, as well as engage with key stakeholders to foster dialogue around how the young professionals can contribute to bending the cost curve in medicine."/>
             <InitBody text="First, we are in the process of summarizing the existing landscape of value-based care through a comprehensive white paper and series of perspectives. Insights from our work will aid the development of new alternative payment models that will improve on the Center for Medicare and Medicaid Innovation Center’s Agenda. "/>
             <InitBody text="Second, we are organizing panels of experts in payment reform and health policy to empower trainees to spearhead innovations in care delivery. "/>
             <InitBody text="Third, we are attempting to conduct rigorous evaluations on the cost-effectiveness alternative payment models and care delivery interventions using publicly available data as well as claims files from commercial payers. "/>
          </div>
          <div className="flex justify-center items-center">
             <Image alt="Emissions figure" 
             className="transition rounded-xl"
             height="500"
             width="500"
             src="/images/VBC-fig.png"/>
          </div>
        </div>
        </div>
    );
};

export default Client;










