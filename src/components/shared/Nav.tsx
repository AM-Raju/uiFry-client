import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center font-clashDisplay  pt-10 font-medium tracking-wide">
      <div className="flex gap-11 items-center">
        <Logo></Logo>
        <nav className="space-x-5 ">
          <Link href="#" className="font-bold text-[#FF5555]">
            Home
          </Link>
          <Link href="#">About Us</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Features</Link>
        </nav>
      </div>
      <Button>Download</Button>
    </div>
  );
};

export default Navbar;
