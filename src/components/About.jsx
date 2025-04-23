import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaFigma,
  FaNode,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiNextdotjs,
  SiMongodb,
  SiCanva,
  SiJira,
  SiTensorflow,
  SiMysql,
  SiFlutter,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { IoLogoNpm, IoLogoVercel } from "react-icons/io5";

const About = () => {
  return (
    <div id="about" className="bg-[#f4e6dc] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#1795fe]">
          About Me
        </h1>

        {/* About Me Section */}
        <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
          I’m <span className="font-bold text-[#1795fe]">SURIYA RAM S</span>, a passionate Full Stack Web Developer and Machine Learning enthusiast. I specialize in building efficient, user-centric digital solutions using modern technologies. With hands-on experience in MERN stack, Flutter, and AI integrations, I strive to craft applications that are scalable, intuitive, and impactful.
        </p>


        {/* Skills Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-[#1795fe] text-center">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Skill Icons */}
            <div className="flex flex-col items-center space-y-2">
              <FaHtml5 size={40} className="text-[#e34c26]" />
              <span className="font-bold">HTML5</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaCss3Alt size={40} className="text-[#264de4]" />
              <span className="font-bold">CSS3</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaJsSquare size={40} className="text-[#f7df1e]" />
              <span className="font-bold">JavaScript</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiBootstrap size={40} className="text-[#563d7c]" />
              <span className="font-bold">Bootstrap</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiTailwindcss size={40} className="text-[#38bdf8]" />
              <span className="font-bold">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaReact size={40} className="text-[#61dbfb]" />
              <span className="font-bold">React.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaNode size={40} className="text-[#68a063]" />
              <span className="font-bold">Node.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiExpress size={40} className="text-[#000000]" />
              <span className="font-bold">Express.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiMongodb size={40} className="text-[#47a248]" />
              <span className="font-bold">MongoDB</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiNextdotjs size={40} className="text-black" />
              <span className="font-bold">Next.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaGithub size={40} className="text-black" />
              <span className="font-bold">GitHub</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <DiVisualstudio size={40} className="text-[#0078d7]" />
              <span className="font-bold">VS Code</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaFigma size={40} className="text-[#F24E1E]" />
              <span className="font-bold">Figma</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaJava size={40} className="text-[#007396]" />
              <span className="font-bold">Java</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaPython size={40} className="text-[#306998]" />
              <span className="font-bold">Python</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiCanva size={40} className="text-[#00c4cc]" />
              <span className="font-bold">Canva</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiJira size={40} className="text-[#0052cc]" />
              <span className="font-bold">Jira</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiTensorflow size={40} className="text-[#ff6f00]" />
              <span className="font-bold">TensorFlow</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiFlutter size={40} className="text-[#02569b]" />
              <span className="font-bold">Flutter</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiMysql size={40} className="text-[#00758f]" />
              <span className="font-bold">MySQL</span>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
<div className="space-y-8 mt-16">
  <h2 className="text-2xl font-bold text-[#1795fe] text-center">
    Certifications
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Certification Cards */}
    <div className="bg-gray-100 rounded-2xl shadow-lg p-6 text-center">
      <img
        src="https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/springboard-logo.png"
        alt="Database Fundamentals"
        className="mx-auto w-16 h-16"
      />
      <h3 className="text-lg font-bold mt-4">Database Fundamentals: Database Concepts</h3>
      <p className="text-gray-600">Infosys Springboard</p>
    </div>

    <div className="bg-gray-100 rounded-2xl shadow-lg p-6 text-center">
      <img
        src="https://vetores.org/d/coursera.svg"
        alt="Google UX Design"
        className="mx-auto w-16 h-16"
      />
      <h3 className="text-lg font-bold mt-4">Google UX Design Professional Certificate</h3>
      <p className="text-gray-600">Coursera</p>
    </div>

    <div className="bg-gray-100 rounded-2xl shadow-lg p-6 text-center">
      <img
        src="https://cist.fmi.uni-sofia.bg/sites/default/files/cisco_logo_large.png"
        alt="PCAP"
        className="mx-auto w-16 h-16"
      />
      <h3 className="text-lg font-bold mt-4">PCAP: Programming Essentials in Python</h3>
      <p className="text-gray-600">Cisco Networking Academy</p>
    </div>

    <div className="bg-gray-100 rounded-2xl shadow-lg p-6 text-center">
      <img
        src="Udemy.svg"
        alt="Graphic Design MasterClass"
        className="mx-auto w-16 h-16"
      />
      <h3 className="text-lg font-bold mt-4">Graphics Design MasterClass</h3>
      <p className="text-gray-600">Udemy</p>
    </div>

    <div className="bg-gray-100 rounded-2xl shadow-lg p-6 text-center">
      <img
        src="Udemy.svg"
        alt="Adobe Illustrator"
        className="mx-auto w-16 h-16"
      />
      <h3 className="text-lg font-bold mt-4">Adobe Illustrator & After Effects</h3>
      <p className="text-gray-600">Udemy</p>
    </div>

    <div className="bg-gray-100 rounded-2xl shadow-lg p-6 text-center">
      <img
        src="WIT.png"
        alt="Java Fullstack"
        className="mx-auto w-16 h-16"
      />
      <h3 className="text-lg font-bold mt-4">Java Fullstack Course</h3>
      <p className="text-gray-600">Wipro TalentNext</p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default About;
