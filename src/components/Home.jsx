import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div id="home" className="bg-[#f4e6dc]">
      <div className="max-w-[85%] mx-auto font-inter grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-screen">
        {/* Left Section */}
        <div className="order-2 lg:order-1 flex flex-col items-center md:items-start justify-start space-y-5 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            I’m <span className="text-[#1795fe]">Suriya Ram</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold flex gap-2">
            <span className="text-[#1795fe]">I’m a</span>
            <Typewriter
              options={{
                strings: ["Developer.", "Designer."],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>

          {/* About Me */}
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            Detail-oriented software professional with hands-on experience in full stack development, skilled in building scalable, high-performance applications. Proficient in UI/UX design, frontend, and backend development, with expertise in Java, Python, HTML, CSS, and React.js.
          </p>


          {/* Contact Information */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-6 text-lg md:text-xl font-semibold">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#1795fe]" size={20} />
              <span>Sivakasi</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#1795fe]" size={20} />
              <span>9486784602</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#1795fe]" size={20} />
              <span>thesuriyaram@gmail.com</span>
            </div>
          </div>

          {/* Download CV Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-[#1795fe] px-5 py-2 rounded-2xl font-bold mt-4 cursor-pointer text-white shadow-lg hover:shadow-2xl transition-all"
          >
            <a href="SuriyaRamS-Resume-Software-Developer.pdf">View CV</a>
          </motion.div>
        </div>

        {/* Right Section with 3D Profile */}
        <div className="order-1 lg:order-2 flex justify-end items-center relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, rotateY: 0 }}
            animate={{ scale: 1, opacity: 1, rotateY: 15 }}
            whileHover={{ rotateY: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.img
              className="shadow-xl cursor-pointer"
              style={{ width: "auto", height: "auto", maxWidth: "70%", maxHeight: "7%" }}
              src="/profile.png"
              alt="Profile"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
