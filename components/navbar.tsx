"use client";

import Image from "next/image";
import Link from "next/link";
import { UserPlus } from "@phosphor-icons/react";

export const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between p-4 xl:px-10 max-w-[1260px] mx-auto bg-transparent">
        <Link href="/" className="flex items-center pl-3 mb-5 mt-5">
          <div>
            <Image alt="" src="/logo.png" width={270} height={270} />
          </div>
        </Link>
        <ul className=" gap-x-5 flex">
          <Link
            href="/"
            className="text-md font-medium text-white transform transition-transform duration-300 hover:translate-y-[-4px] px-2 py-2 rounded "
          >
            Videos
          </Link>
          <Link
            href="/"
            className="text-md font-medium text-white transform transition-transform duration-300 hover:translate-y-[-4px] px-2 py-2 rounded "
          >
            Chatbot
          </Link>
      
        </ul>
        
        <div className="flex items-center gap-x-8">
        <Link href="/" className=" font-medium text-md text-white transform transition-transform duration-300 hover:translate-y-[-4px]">Sign in</Link>
        <Link href="/">
        <button className=" flex bg-green-500 items-center text-white rounded-md font-medium text-md transform transition-transform duration-300 hover:translate-y-[-4px] py-[10px] px-[20px] shadow-lg"><UserPlus size={22} weight="bold" className="mr-2" /> Free Sign Up </button>
        </Link>
      </div>

      </nav>
    </div>
  );
};