import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#f4e6dc]">
      <div className="max-w-[90%] mx-auto py-3 flex items-center justify-between font-inter">
        {/* Logo */}
        <div>
          <h1 className="text-[2.5rem] font-bold text-[#000] hover:text-[#1795fe] ">
            Suriya Ram
          </h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className=" transition-all duration-500 ease-in text-[#1795fe] "
          >
            {isMenuOpen ? <HiX size={29} /> : <HiMenuAlt3 size={29} />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-[70px] left-0 w-full bg-[#f4e6dc] p-5 lg:p-0 lg:relative lg:block lg:w-auto lg:px-5 lg:py-3 lg:rounded-2xl lg:top-0`}
        >
          <ul className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-5 text-[14px] font-semibold">
           <Link to="home" smooth={true} duration={500}>
           <li className="hover:text-[#1795fe] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px] ">
              Home
            </li></Link>
            <Link to="about" smooth={true} duration={500}>
            <li className="hover:text-[#1795fe] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px] ">
              About
            </li>
            </Link>
           <Link to="project" smooth={true} duration={500}>
           <li className="hover:text-[#1795fe] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px] ">
              Project
            </li>
           </Link>
            <Link to="contact" smooth={true} duration={500}>
            <li className="hover:text-[#1795fe] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px] ">
              Contact
            </li>
            </Link>
          </ul>
          {/* Social Media Links for Mobile */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:hidden mt-3 flex justify-center gap-5`}
          >
            <a
              href="https://github.com/suriyaram15"
              className="  hover:text-[#1795fe] "
            >
              <FaGithub size={29} />
            </a>
            <a
              href="https://www.linkedin.com/in/suriya-ram-150402-s"
              className="hover:text-[#1795fe]"
            >
              <FaLinkedin size={29} />
            </a>
            <a
              href="https://www.instagram.com/suriya._.ram"
              className="hover:text-[#1795fe]"
            >
              <FaInstagram size={29} />
            </a>
          </div>
        </nav>

        {/* Social Media Links */}
        <div className="hidden lg:flex w-[100px] items-center justify-between">
          <a
            href="https://github.com/suriyaram15"
            className="hover:text-[#1795fe]"
          >
            <FaGithub size={29} />
          </a>
          <a
            href="https://www.linkedin.com/in/suriya-ram-150402-s"
            className="hover:text-[#1795fe]"
          >
            <FaLinkedin size={29} />
          </a>
          <a
            href="https://www.instagram.com/suriya._.ram"
            className="hover:text-[#1795fe]"
          >
            <FaInstagram size={29} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
