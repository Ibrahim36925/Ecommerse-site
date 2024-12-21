"use client";
import { IoIosArrowDown } from "react-icons/io";
import { IoHeartOutline, IoSearch } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";;
// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="px-6 py-4 flex justify-between items-center">
      {/* Logo */}
        <a href="#" className="font-Montserrat text-xl font-bold">
          Bandage
        </a>

        {/* <!-- Desktop Navigation Menu --> */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:underline flex items-center space-x-1">
              Shop <IoIosArrowDown className="w-4 h-4" />
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/productDetails" className="hover:underline">
              ProductDetails
            </Link>
          </li>
        
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/team" className="hover:underline">
              Team
            </Link>
          </li>
        </ul>

      {/* Utility Links */}
      <div className="hidden md:flex space-x-4 "  style={{ color: "#23A6F0" }}>
        <span className="flex   items-center">
          <CiUser className="w-6 h-6" />
            <a
              href="#"
            className="hover:underline text-sm font-bold"
          >
              Login / Register
            </a>
          </span>
          <div className="hidden md:flex space-x-2">
          <IoSearch className="w-6 h-6" />
          <IoCartOutline className="w-6 h-6" />
          <IoHeartOutline className="w-6 h-6" />
        </div>

      </div>
  
      {/* Mobile Menu Toggle */}
      <div  className="md:hidden flex space-x-4">
      <IoSearch  className="md:hidden text-gray-600 hover:text-gray-800 w-6 h-6"/>
       <IoCartOutline  className="md:hidden text-gray-600 hover:text-gray-800 w-6 h-6"/>
          <button
            className="md:hidden text-gray-600 hover:text-gray-800"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
          className="h-6 w-6"
        >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
      </div>
    
    </div>

          {isMobileMenuOpen && (
            <div className="md:hidden bg-white shadow-md">
              <ul className="space-y-4 text-center py-4 text-gray-700">
                <li>
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)}>
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/productDetails" onClick={() => setIsMobileMenuOpen(false)}>
                    ProductDetails
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/team" onClick={() => setIsMobileMenuOpen(false)}>
                    Team
                  </Link>
                </li>
              </ul>
            </div>
          )}
  </nav>
  
      )
}
        {/* Mobile Menu Button */}
    
    
 




//       <nav className="bg-white shadow-md">

//       <div className="  px-4 py-3 flex flex-wrap justify-between items-center">
//         {/* Logo */}
//         <a href="#" className=" font-Montserrat text-xl font-bold">Bandage</a>

//         {/* Navigation Links */}
//         <ul className="hidden md:flex space-x-4">
//           <li><a href="#" className="hover:underline">Home</a></li>
//           <li><a href="#" className="hover:underline flex items-center space-x-1">Shop <IoIosArrowDown width={20} height={20}/></a></li>
//           <li><a href="#" className="hover:underline">About</a></li>
//           <li><a href="#" className="hover:underline">Blog</a></li>
//           <li><a href="#" className="hover:underline">Contact</a></li>
//           <li><a href="#" className="hover:underline">Pages</a></li>
//         </ul>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden flex items-center space-x-4">
//           <button className="hover:underline text-black-800">

//           </button>
//         </div>

//         {/* Utility Links */}
//         <div className="flex space-x-4 items-center">

//         <span className="flex items-center space-x-2">
//         <Image style={{objectFit:"contain",width:""}} src={user} alt="" width={12} height={12} />
//           <a href="#" style={{color:"#23A6F0"}} className=" hover:underline text-sm-1 font-bold ">Login / Register</a>

//           </span>

//           <Image className="" src={search} alt="" width={16} height={16} />
//           <Image className="" src={cart} alt="" width={16} height={16}/>
//           <Image className="" src={mail} alt="" width={16} height={16} />
//           </div>

//  </div>
//     </nav>
//
