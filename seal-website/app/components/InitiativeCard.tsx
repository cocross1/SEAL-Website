'use client'

import Image from "next/image";
import { useCallback, useMemo } from "react";
import useInitiative from "../hooks/useInitiative";
import Heading from "./Heading";
import Button from "./Button";
import { useRouter } from "next/navigation";

interface InitiativeCardProps {
  title:string,
  link:string,
  body:string[],
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  imageSrc:string;
}

const InitiativeCard: React.FC<InitiativeCardProps> = ({
  title,
  link,
  body,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  imageSrc
}) => {
  const router = useRouter();

  

  return (
    <div
      
      className=" flex flex-col gap-2 w-full overflow-hidden mt-10 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-200"
    >
        <Heading title={title} />
      <div className="w-full h-full">
        {/* <div className="w-full relative overflow-hidden rounded-xl">
          <Image
            layout="responsive"
            width={500}
            height={200}
            alt="Room"
            src={imageSrc}
            className="object-cover group-hover:scale-110 transition"
          />

        </div> */}
        <div   className="w-full h-full text-center rounded-xl hover:scale-105 transition-transform duration-200">
        <button
        disabled={disabled}
        onClick={() =>  router.push(link)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl w-1/2 h-full lg:w-1/4"
      >
        Learn More
      </button>
        </div>

      </div>
    </div>
  );
};
export default InitiativeCard;
