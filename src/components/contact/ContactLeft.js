import React from "react";
import { contactImg } from "../../assets";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function ContactLeft() {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt=""
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Bereket Dinku</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide"></p>
        <p className="text-base text-gray-400 flex items-center gap-2 ">
          Phone: <span className="text-lightText">+251901108024</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2 ">
          Email:{" "}
          <span className="text-lightText">bereketdinku80@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase mb-4">Find me</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <a className="bannerIcon" href="">
            <FaTwitter />
          </a>
          <a
            className="bannerIcon"
            href="https://www.linkedin.com/in/beki-dink-22b752296/"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;
