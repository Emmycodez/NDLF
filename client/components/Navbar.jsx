'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { logo1 } from "@/images";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  if (pathname.includes("/site/dashboard")) return null;

  const navArray = [
    { name: "Home", id: "1", path: "/" },
    { name: "About Us", id: "2", path: "/about" },
    { name: "Apply", id: "3", path: "/apply" },
    { name: "Contact Us", id: "4", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" w-full z-10 bg-red-600 text-gray-100 py-[20px] px-6">
      <div className="flex justify-between items-center ">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image src={logo1} alt="New Life Dream Foundation" width={40} height={40} />
          <span className="ml-2 font-bold text-2xl">New Life Dream Foundation</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-8 text-lg">
          {navArray.map((item) => (
            <Link key={item.id} href={item.path} className="hover:underline">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4">
          {navArray.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className="hover:underline text-lg"
              onClick={toggleMenu} // Close menu on link click
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
