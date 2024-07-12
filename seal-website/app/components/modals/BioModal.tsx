'use client';

import React, { useState } from "react";
import { FaLinkedin, FaEnvelope, FaGithub, FaTwitter } from 'react-icons/fa'; // Import the Twitter icon
import Image from 'next/image';
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import useInitiative from "@/app/hooks/useBio";

const BioModal: React.FC = () => {
  const router = useRouter();
  const initiativeModal = useInitiative();
  const [isLoading, setIsLoading] = useState(false);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 mt-3 text-md xs:text-md sm:text-md md:text-xl lg:text-xl xl:text-xl">
        {initiativeModal.bio.map((bioItem, index) => (
          <div key={index}>{bioItem}</div>
        ))}
      </div>
    </div>
  );

  return (
    <Modal
      allowClose={true}
      disabled={isLoading}
      isOpen={initiativeModal.isOpen}
      title={initiativeModal.name}
      onClose={initiativeModal.onClose}
      onSubmit={() => { }}
      body={
        <div className="flex-1 overflow-y-auto">
          <div className="flex justify-center items-center mb-4">
            <div className="flex gap-4">
              {initiativeModal.linkedIn && (
                <a href={initiativeModal.linkedIn} target="_blank" rel="noopener noreferrer">
                  <span className="inline-block transform transition-transform duration-200 hover:scale-110">
                    <FaLinkedin size={30} />
                  </span>
                </a>
              )}
              {initiativeModal.email && (
                <a href={`mailto:${initiativeModal.email}`} target="_blank" rel="noopener noreferrer">
                  <span className="inline-block transform transition-transform duration-200 hover:scale-110">
                    <FaEnvelope size={30} />
                  </span>
                </a>
              )}
              {initiativeModal.googleScholar && (
                <a href={initiativeModal.googleScholar} target="_blank" rel="noopener noreferrer">
                  <span className="inline-block transform transition-transform duration-200 hover:scale-110">
                    <Image
                      src="/images/research.png"
                      alt="Google Scholar"
                      width={45}
                      height={45}
                    />
                  </span>
                </a>
              )}
              {initiativeModal.gitHub && (
                <a href={initiativeModal.gitHub} target="_blank" rel="noopener noreferrer">
                  <span className="inline-block transform transition-transform duration-200 hover:scale-110">
                    <FaGithub size={30} />
                  </span>
                </a>
              )}
              {initiativeModal.twitter && (
                <a href={initiativeModal.twitter} target="_blank" rel="noopener noreferrer">
                  <span className="inline-block transform transition-transform duration-200 hover:scale-110">
                    <FaTwitter size={30} />
                  </span>
                </a>
              )}
            </div>
          </div>
          <div className="flex-1 overflow-y-auto px-10">
            {bodyContent}
          </div>
        </div>
      }
    />
  );
};

export default BioModal;
