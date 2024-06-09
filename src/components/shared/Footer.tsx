import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="mt-28">
      <div className="flex justify-between mb-24">
        <div>
          <Logo></Logo>
          <ul className="space-y-4 mt-4 font-medium text-lg">
            <li>Help@Frybix.com</li>
            <li>+1234 456 678 89</li>
          </ul>
        </div>
        <div>
          <h2 className="text-4xl font-medium">Links</h2>
          <ul className="space-y-4 mt-4 font-medium text-lg">
            <li>Home</li>
            <li>About Us</li>
            <li>Booking</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h2 className="text-4xl font-medium">Legal</h2>
          <ul className="space-y-4 mt-4 font-medium text-lg">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div>
          <h2 className="text-4xl font-medium">Products</h2>
          <ul className="space-y-4 mt-4 font-medium text-lg">
            <li>Take a tour</li>
            <li>Live chat</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div>
          <h2 className="text-4xl font-medium">Newsletter</h2>
          <p className="font-medium text-lg mt-4">Stay Up To Date</p>
          <div>
            <input type="text" placeholder="Your Email" />
            <button className="text-lg font-medium text-white bg-black px-10 py-4 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-0.5 rounded-2xl  bg-gradient-to-l from-transparent via-black to-transparent tracking-wider"></div>
      <p className="font-medium text-lg text-center my-10">
        Copyright 2024 uifry.com all rights reserved
      </p>
    </div>
  );
};

export default Footer;
