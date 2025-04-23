import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1795fe] text-white py-6">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto text-center space-y-2">
        <p className="text-sm md:text-base font-medium">
          © {new Date().getFullYear()} Suriya Ram. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-2">
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
    </footer>
  );
};

export default Footer;
