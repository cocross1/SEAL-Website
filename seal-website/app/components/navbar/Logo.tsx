'use client';
import React from 'react'
import Image from "next/image"
import { useRouter } from "next/navigation";
const Logo = () => {
  const router = useRouter();
  return <Image 
  onClick={()=> router.push('/')}
  alt="Logo"
  className=" justify-center md:block cursor-pointer hover:bg-gray-300
  transition rounded-xl"
  height="300"
  width="350"
  src="/images/H-logo.png"
  />

}

export default Logo