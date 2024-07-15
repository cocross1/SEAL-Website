'use client';
import React from 'react'
import Image from "next/image"
import { useRouter } from "next/navigation";
const Logo = () => {
  const router = useRouter();
  return <Image 
  onClick={()=> router.push('/')}
  alt="Logo"
  className=" justify-center cursor-pointer
  transition rounded-xl xl:flex"
  width="275"
  height="100"
  src="/images/H-logo.png"
  />

}

export default Logo