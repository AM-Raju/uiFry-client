import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Button from "./Button";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <div className="navbar  pt-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#faq" scroll={true}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex font-medium tracking-wider text-lg  ">
        <ul className="flex gap-5 px-1 relative -left-14">
          <li className="hover:text-[#ff5555] hover:font-bold transition-all duration-300 ">
            <Link href="#home" scroll={true}>
              Home
            </Link>
          </li>
          <li className="hover:text-[#ff5555] hover:font-bold transition-all duration-300">
            <Link href="#features" scroll={true}>
              Features
            </Link>
          </li>
          <li className="hover:text-[#ff5555] hover:font-bold transition-all duration-300">
            <Link href="#advantages" scroll={true}>
              Advantages
            </Link>
          </li>
          <li className="hover:text-[#ff5555] hover:font-bold transition-all duration-300">
            <Link href="#testimonials" scroll={true}>
              Testimonials
            </Link>
          </li>
          <li className="hover:text-[#ff5555] hover:font-bold transition-all duration-300">
            <Link href="#faq" scroll={true}>
              FAQ
            </Link>
          </li>
          <li className="hover:text-[#ff5555] hover:font-bold transition-all duration-300">
            <Link href="#getStarted" scroll={true}>
              Get Started
            </Link>
          </li>
        </ul>
      </div>
      <div className="ml-5">
        <DarkModeToggle></DarkModeToggle>
      </div>
      <div className="navbar-end">
        <Button>Download</Button>
      </div>
    </div>
  );
};

export default Navbar;
