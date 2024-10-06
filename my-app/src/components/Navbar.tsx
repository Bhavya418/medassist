import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-20 py-6 border-t border-b shadow z-10">
      <nav className="flex justify-center space-x-8 text-gray-600 font-medium">
        <Link
          to="/Home"
          className="relative hover:text-purple-700 hover:border-b-2 hover:border-purple-700"
        >
          Home
        </Link>

        <div className="relative group">
          <Link
            to="#"
            className="flex items-center justify-center hover:text-purple-700 hover:border-b-2 hover:border-purple-700"
          >
            Solutions <span ><ChevronDown size={20}/></span>
          </Link>
          <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 min-w-[200px]">
            <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
              End to end RCM solution
            </Link>
            <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
              Credentialing
            </Link>
            <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
              Consulting
            </Link>
          </div>
        </div>

        <div className="relative group">
          <Link
            to="#"
            className="flex items-center justify-center hover:text-purple-700 hover:border-b-2 hover:border-purple-700"
          >
            Specialties <span ><ChevronDown size={20}/></span>
          </Link>
          <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 min-w-[200px]">
            <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
              Cardiologist
            </Link>
            <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
              Pain Management
            </Link>
            <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
              Internists
            </Link>
            <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
              Oncology
            </Link>
          </div>
        </div>

        <Link
          to="/Contact"
          className="relative hover:text-purple-700 hover:border-b-2 hover:border-purple-700"
        >
          Contact
        </Link>
        <Link
          to="#"
          className="relative hover:text-purple-700 hover:border-b-2 hover:border-purple-700"
        >
          Careers
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
