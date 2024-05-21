'use client';

import React, { useEffect } from "react";
import { useCallback, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Modal from "./Modal";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import useContact from "@/app/hooks/useContact";
import Input from "../inputs/Input";
import axios from "axios";

const ContactUsModal = () => {
  const router = useRouter();
  const contactModal = useContact();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      subject: "",
      email: "",
      message: ""
    },
  });

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);

    try {
      await axios.post('/api/contact/sendEmail', data);
      toast.success('Email sent successfully');
      reset();
      contactModal.onClose();
    } catch (error) {
      toast.error('Failed to send email');
    } finally {
      setIsLoading(false);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4 mt-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input id="subject" label="Subject Line" register={register} disabled={isLoading} errors={errors} />
        <Input id="email" label="Your Email" register={register} disabled={isLoading} errors={errors} />
      </div>
      <div className="mb-20">
        <Input
          id="message"
          label="Write your message here..."
          register={register}
          disabled={isLoading}
          errors={errors}
          className="h-32"
          isTextArea={true}
        />
      </div>
    </div>
  );

  return (
    <Modal
      allowClose={true}
      disabled={isLoading}
      isOpen={contactModal.isOpen}
      title="Contact Us!"
      onClose={contactModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="Send!"
      body={bodyContent}
    />
  );
};

export default ContactUsModal;
