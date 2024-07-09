'use client'

import React from 'react';
import { useRouter } from "next/navigation";
import Button from './Button';
import SectionHeading from './SectionHeader';
import SubHeader from './SubHeader';

const ConnectSection = () => {
    return (
        <div className="bg-gradient-to-t from-blue-300 to-white pt-5 pb-20 ">
            <SectionHeading title="Connect With Us"></SectionHeading>
            <div className="flex justify-center items-center">
                <a
                    href={"https://www.instagram.com/socialequityactionlab/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-6 flex justify-between items-center text-white gap-20 w-1/4 mt-10 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-200 bg-blue-900">
                    <div className="flex-1 flex flex-col items-center">
                        <div className="text-2xl mt-2">{"Instagram!"}</div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default ConnectSection;
