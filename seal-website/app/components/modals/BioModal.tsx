"use client";

import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Heading from "../Heading";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Button from "../Button";
import useInitiative from "@/app/hooks/useBio";

interface BioModalProps {
    name?:string,
    bio?:string[]
}

const BioModal: React.FC<BioModalProps> = ({ name, bio }) => {
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
      body={bodyContent}
    />
  );
};

export default BioModal;
