'use client'

import Image from "next/image";
import { useCallback, useMemo } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import SubHeading from "./SubHeader";

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
      
      className="px-5 flex flex-col text-white gap-2 w-full overflow-hidden mt-10 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-200"
    >
        <SubHeading text={title} />
      <div className="w-full h-full">
        <div   className="w-full h-full text-center rounded-xl hover:scale-105 transition-transform duration-200">
        <button
        disabled={disabled}
        onClick={() =>  router.push(link)}
        className="bg-zinc-50 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-xl w-1/2 h-full lg:w-1/4"
      >
        Learn More
      </button>
        </div>

      </div>
    </div>
  );
};
export default InitiativeCard;
