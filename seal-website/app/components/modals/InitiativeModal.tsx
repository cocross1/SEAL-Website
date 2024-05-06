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
import useInitiative from "@/app/hooks/useInitiative";

interface InitiativeModalProps {
    title?:string,
    text?:string
}

const InitiativeModal: React.FC<InitiativeModalProps> = ({ title, text }) => {
  const router = useRouter();
  const initiativeModal = useInitiative();
  const [isLoading, setIsLoading] = useState(false);



  

  const bodyContent = (
    <div className=" flex flex-col gap-4">
      {initiativeModal.body.map((item, index) => (
          <div key={index} className="flex flex-col gap-4 mt-3">
            {item}
          </div>
        ))}
    </div>
  );

  return (
    <Modal
      allowClose={true}
      disabled={isLoading}
      isOpen={initiativeModal.isOpen}
      title={initiativeModal.title}
      onClose={initiativeModal.onClose}
      onSubmit={() => {}}
      body={bodyContent}
    />
  );
};

export default InitiativeModal;
