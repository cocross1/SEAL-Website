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
      <div className="flex flex-col gap-4 mt-3">
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
      onSubmit={() => {}}
      body={
        <div>
          <div className="flex justify-center items-center mb-4">
            <div className="flex gap-4">
              {initiativeModal.linkedIn && (
                <a href={initiativeModal.linkedIn} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={30} />
                </a>
              )}
              {initiativeModal.email && (
                <a href={`mailto:${initiativeModal.email}`} target="_blank" rel="noopener noreferrer">
                  <FaEnvelope size={30} />
                </a>
              )}
              {initiativeModal.googleScholar && (
                <a href={initiativeModal.googleScholar} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/research.png"
                    alt="Google Scholar"
                    width={45}
                    height={45}
                  />
                </a>
              )}
              {initiativeModal.gitHub && (
                <a href={initiativeModal.gitHub} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={30} />
                </a>
              )}
              {initiativeModal.twitter && (
                <a href={initiativeModal.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={30} />
                </a>
              )}
            </div>
          </div>
          {bodyContent}
        </div>
      }
    />
  );
};

export default BioModal;
