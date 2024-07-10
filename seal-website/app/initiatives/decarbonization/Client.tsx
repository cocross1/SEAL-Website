'use client'
import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import Publication from '@/app/components/Publication';
import InitHeader from '@/app/components/InitHeader';
import InitLabel from '@/app/components/InitLabel';
import InitBody from '@/app/components/InitBodyText';
import SectionDivider from '@/app/components/SectionDivider';

const Client = () => {
  return (
    <div>
      <InitLabel title="Initiatives" />
      <InitHeader title="Advocating for Healthcare Decarbonization" />
      <div className="
          mt-10
          mx-10
          grid gap-4
          justify-items-center
          grid grid-cols-1 md:grid-cols-2">
        <div className="grid grid-rows-1 gap-4">
          <InitBody text="The climate crisis is the single greatest public health challenge of the 21st century…" />
          <InitBody text="and as a significant contributor to climate change, the healthcare sector faces an urgent call to action to reduce its carbon footprint and protect communities from climate threats." />
          <InitBody text="In line with global movements from the UN, COP, and WHO, our team is looking to engage young healthcare professionals in making climate policy a priority among health systems and the broader healthcare community." />
          <InitBody text="First, we are leveraging global datasets to assess the effect of climate change on health outcomes and access to care — with a particular emphasis on low- and middle-income countries, which will be disproportionately affected by the climate crisis." />
          <InitBody text="Second, we are partnering with health systems to advocate for more eco-friendly and sustainable practices, ranging from fewer volatile gases and more re-usable devices during surgery to smart energy saving practices, as outlined in a 2022 report published by the Agency for Healthcare Research and Quality." />
        </div>
        <div className="flex justify-center items-center">
          <Image alt="Emissions figure"
            className="transition rounded-xl"
            height="500"
            width="500"
            src="/images/HD-fig.png" />
        </div>
      </div>
      <div>
        <SectionDivider text="Publications" />
        <div className="flex flex-row pt-5 grid
               grid-cols-1 md:grid-cols-2 lg:grid-cols-3
               gap-6 pb-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full flex justify-center px-5"
          >

            <Publication img="/images/ahrq.png" href="https://www.ahrq.gov/sites/default/files/wysiwyg/healthsystemsresearch/decarbonization/decarbonization.pdf" />


          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full flex justify-center px-5"
          >
            <Publication img="/images/catalyst.svg" href="https://catalyst.nejm.org/doi/full/10.1056/CAT.22.0433" />
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full flex justify-center px-5"
          >
            <Publication img="/images/ha.jpg" href="https://www.healthaffairs.org/content/forefront/us-healthcare-sector-can-decarbonize-reduce-waste-and-improve-public-health-thoughtful" />
          </motion.div>
        </div>
      </div>
    </div>

  );
};

export default Client;










