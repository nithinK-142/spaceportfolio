import Image from "next/image";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/user.svg"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin h-6 md:h-8"
          />

          <span className="font-bold hidden md:block text-gray-300 text-lg">
            N I T H I N <span className="text-orange-700 font-bold">.</span> me
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 text-white text-xl">
          <FaLinkedin />
          <FaGithub />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
