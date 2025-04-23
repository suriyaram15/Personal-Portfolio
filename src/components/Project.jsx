const Project = () => {
  return (
    <div id="project" className="bg-[#f4e6dc] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#1795fe]">
          My Projects
        </h1>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Project 1 */}
          <div className="flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#1795fe] font-extrabold text-[28px] md:text-[32px] mb-4 text-center">
              AI-Powered Travel Itinerary Planner
            </h1>
            <p className="text-lg text-gray-700 mb-4 text-center">
              A smart travel planner that uses AI, collaborative filtering, content filtering, and APIs like Google Places and OpenWeatherMap to generate custom itineraries.
            </p>
            <a
              href="https://travplan-ai-powered-itinerary-planner.vercel.app/"
              className="text-[#1795fe] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#1795fe] font-extrabold text-[28px] md:text-[32px] mb-4 text-center">
              Weather App
            </h1>
            <p className="text-lg text-gray-700 mb-4 text-center">
              A weather forecasting app built with React.js and OpenWeatherMap API, displaying real-time weather updates for any city.
            </p>
            <a
              href="https://weather-application-livid-iota.vercel.app/"
              className="text-[#1795fe] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#1795fe] font-extrabold text-[28px] md:text-[32px] mb-4 text-center">
              Cotton Disease Identification (CNN)
            </h1>
            <p className="text-lg text-gray-700 mb-4 text-center">
              A deep learning project using CNN to detect diseases in cotton plants and leaves, developed using Python and TensorFlow.
            </p>
            <a
              href="https://github.com/suriyaram15/cotton-disease-identification-cnn"
              className="text-[#1795fe] font-bold text-lg hover:underline"
            >
              View on GitHub
            </a>
          </div>

          {/* Project 4 */}
          <div className="flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#1795fe] font-extrabold text-[28px] md:text-[32px] mb-4 text-center">
              Online Banking Database System
            </h1>
            <p className="text-lg text-gray-700 mb-4 text-center">
              A database project for managing online banking operations, including accounts, transactions, and user information.
            </p>
            <a
              href="https://github.com/suriyaram15/online-banking-db"
              className="text-[#1795fe] font-bold text-lg hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Project 5 */}
        
          <div className="w-full flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#1795fe] font-extrabold text-[28px] md:text-[32px] mb-4 text-center">
              Personal Portfolio
            </h1>
            <p className="text-lg text-gray-700 mb-4 text-center">
              A responsive and elegant portfolio website built using React.js and Tailwind CSS to showcase my skills, projects, and contact information.
            </p>
            <a
              href="https://suriyaram.netlify.app/"
              className="text-[#1795fe] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
  );
};

export default Project;
