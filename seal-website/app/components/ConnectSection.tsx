'use client'

import React from 'react';
import { useRouter } from "next/navigation";
import Button from './Button';
import SectionHeading from './SectionHeader';
import SubHeader from './SubHeader';

const ConnectSection = () => {
    return (
        <div className="bg-blue-200 pt-5 pb-20 ">
            <SectionHeading title="Connect With Us"></SectionHeading>

            <div className="flex justify-center items-center gap-10">
                <a
                    href={"https://www.instagram.com/socialequityactionlab/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-6 flex justify-between items-center text-white gap-20 w-1/4 mt-10 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-200 bg-blue-900">
                    <div className="flex-1 flex flex-col items-center">
                        <div className="text-md md:text-2xl lg:text-2xl xl:text-2xl  text-center mt-2">{"Instagram!"}</div>
                    </div>
                </a>
                <a
                    href={"https://www.linkedin.com/company/social-equity-action-lab/about/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-6 flex justify-between items-center text-white gap-20 w-1/4 mt-10 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-200 bg-blue-900">
                    <div className="flex-1 flex flex-col items-center">
                        <div className="text-md md:text-2xl lg:text-2xl xl:text-2xl  text-center mt-2">{"LinkedIn!"}</div>
                    </div>
                </a>
                <a
                    href={"https://x.com/socialequitylab"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-6 flex justify-between items-center text-white gap-20 w-1/4 mt-10 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-200 bg-blue-900">
                    <div className="flex-1 flex flex-col items-center">
                        <div className="text-md md:text-2xl lg:text-2xl xl:text-2xl  text-center mt-2">{"Twitter!"}</div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default ConnectSection;
