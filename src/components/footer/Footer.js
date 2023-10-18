import React from "react";
import { Logo } from "../../assets";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img src={Logo} className="w-32" alt="logo" />
        <div className="flex gap-4 ">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wide">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-medium py-6 overflow-hidden">
          <li>
            <span className="text-xl text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              About
            </span>
          </li>
          <li>
            <span className="text-xl text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Portfolio
            </span>
          </li>
          <li>
            <span className="text-xl text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Services
            </span>
          </li>
          <li>
            <span className="text-xl text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Blog
            </span>
          </li>
          <li>
            <span className="text-xl text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Contact
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wide">
          RESOURCES
        </h3>
        <ul className="flex flex-col gap-4 font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Authentication
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              System Status
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Terms of Services
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Pricing
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wide">
          DEVELOPERS
        </h3>
        <ul className="flex flex-col gap-4 font-medium overflow-hidden py-6">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Authentication
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Documentation
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              API Reference
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Support
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
