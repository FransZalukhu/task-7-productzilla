import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="text-center mb-4">
          <p>&copy; 2024 Frans Zalukhu. All Rights Reserved.</p>
        </div>
        <div className="flex space-x-6 justify-center">
          <a
            href="https://github.com/FransZalukhu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F96E2A] transition duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/frans-zalukhu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F96E2A] transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:fransdamai2020@gmail.com"
            className="hover:text-[#F96E2A] transition duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
