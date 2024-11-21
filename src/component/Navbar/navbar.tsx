import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link
                to="/"
                className="flex items-center py-4 px-2 text-[#CBDCEB] hover:text-blue-500"
              >
                My Portfolio
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/"
                className="py-4 px-2 text-[#F96E2A] hover:text-blue-500 transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="py-4 px-2 text-[#F96E2A] hover:text-blue-500 transition duration-300"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="py-4 px-2 text-[#F96E2A] hover:text-blue-500 transition duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="outline-none mobile-menu-button"
            >
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu md:hidden">
            <Link
              to="/"
              className="block py-2 px-4 text-sm hover:bg-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="block py-2 px-4 text-sm hover:bg-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="block py-2 px-4 text-sm hover:bg-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
