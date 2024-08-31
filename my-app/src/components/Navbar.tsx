import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-20 py-6 border-t border-b shadow z-10">
      <nav className="flex justify-center space-x-8 text-gray-600 font-medium">
        <a
          href="#"
          className="relative hover:text-purple-700 hover:border-b-2 hover:border-purple-700"
        >
          Home
        </a>

        <div className="relative group">
          <a
            href="#"
            className="flex items-center hover:text-purple-700 hover:border-b-2 hover:border-purple-700"
          >
            Solutions
          </a>
          <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 min-w-[200px]">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              End to end RCM solution
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Credentialing
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Consulting
            </a>
          </div>
        </div>

        <div className="relative group">
          <a
            href="#"
            className="flex items-center hover:text-purple-700 hover:border-b-2 hover:border-purple-700"
          >
            Specialties <span className="ml-1">↓</span>
          </a>
          <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 min-w-[200px]">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Cardiologist
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Pain Management
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Internists
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Oncology
            </a>
          </div>
        </div>

        <a
          href="#"
          className="relative hover:text-purple-700 hover:border-b-2 hover:border-purple-700"
        >
          Contact
        </a>
        <a
          href="#"
          className="relative hover:text-purple-700 hover:border-b-2 hover:border-purple-700"
        >
          Careers
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
