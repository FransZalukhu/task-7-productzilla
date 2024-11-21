import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#F3F3E0]">
        <div className="text-center md:text-left px-4 md:px-24">
          <h1 className="text-3xl md:text-5xl font-bold text-[#133E87] mb-4">
            Hi, I'm Frans Damai Zalukhu
          </h1>
          <p className="text-lg md:text-xl text-gray-800 mb-6">
            A passionate web developer creating beautiful and functional web
            experiences.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link
              to="/contact"
              className="bg-[#F96E2A] text-white px-6 py-2 rounded-full border-2 border-transparent hover:bg-transparent hover:text-[#F96E2A] hover:border-[#F96E2A] transition duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="src/assets/Profile Picture.jpg"
            alt="Profile"
            className="rounded-full w-40 h-40 md:w-64 md:h-64 object-cover shadow-lg"
          />
        </div>
      </div>

      {/* About Me Section */}
      <section className="bg-[#CBDCEB] py-16 px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#133E87] mb-8">
          About Me
        </h2>
        <p className="text-gray-800 text-center max-w-4xl mx-auto">
          My name is Frans Damai Zalukhu, and I am a student at Bengkalis State
          Polytechnic. I have an interest in the field of technology,
          particularly in Software Development. I actively develop my skills
          through both my Campus Studies and the Online Courses I take.
          Throughout my academic coursework and the Online Courses I have
          participated in, I have learned about Java Programming, Website
          Development, UI/UX Design, and Database Development.
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-8 bg-[#F3F3E0]">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#133E87] mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <img src="src/assets/js-icons.svg" alt="JS" className="w-12 h-12" />
            <p className="mt-2 text-[#133E87]">Javascript</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="src/assets/java-icons.svg"
              alt="Java"
              className="w-12 h-12"
            />
            <p className="mt-2 text-[#133E87]">Java</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="src/assets/kotlin-icons.svg"
              alt="Kotlin"
              className="w-12 h-12"
            />
            <p className="mt-2 text-[#133E87]">Kotlin</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="src/assets/ts-icons.svg" alt="TS" className="w-12 h-12" />
            <p className="mt-2 text-[#133E87]">Typescript</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
