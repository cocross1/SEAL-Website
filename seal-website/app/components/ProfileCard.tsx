'use client'

import Image from "next/image";
import useBio from "../hooks/useBio";
import SubHeader from './SubHeader';
import { useRouter } from "next/navigation";

interface ProfileCardProps {
  name: string,
  bio: string[],
  imageSrc?: string;
  linkedIn?: string;
  email?: string;
  googleScholar?: string;
  gitHub?: string;
  twitter?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  bio,
  imageSrc,
  linkedIn,
  email,
  googleScholar,
  gitHub,
  twitter
}) => {
  const router = useRouter();
  const bioModal = useBio();

  return (
    <div className="bg-blue-300 w-full max-w-sm mx-auto mt-5 rounded-xl p-5 cursor-pointer hover:scale-110 transition-transform duration-200">
      <div
        className="flex flex-col gap-2 overflow-hidden rounded-xl"
        onClick={() => { bioModal.onOpen(name, bio, linkedIn, email, googleScholar, gitHub, twitter) }}
      >
        <SubHeader text={name} />
        <div className="relative overflow-hidden rounded-xl mx-auto w-32 h-32">
          <Image
            layout="fill"
            objectFit="cover"
            alt={name}
            src={imageSrc ? imageSrc : "/images/default.png"}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
