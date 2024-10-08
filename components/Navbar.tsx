'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from 'next/navigation'
import CustomButton from "./CustomButton";
const Navbar = () => {
  const handleSignUp =()=>{
   router.push('/signup')
  }
   const handleLogin = () => {
     router.push("/login");
   };
  const router = useRouter();

  return (
    <header className="w-full absolute z-10">
      <nav
        className="max-w-[1440px] mx-auto flex
         justify-between items-center sm:px-16 px-6 py-4"
      >
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <ul className="flex justify-center gap-5">
          <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles="text-primary-blue 
          rounded-full bg-white min-w-[130px]"
            handleClick={() => handleSignUp()}
          />
          <CustomButton
            title="Login"
            btnType="button"
            containerStyles="text-primary-blue 
          rounded-full bg-white min-w-[130px]"
            handleClick={() => handleLogin()}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
