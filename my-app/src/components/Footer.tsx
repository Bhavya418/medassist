
import { Phone, Mail, Map, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="mt-8 grid grid-cols-2 gap-10 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            {/* About Us Section */}
            <div className="col-span-8 sm:col-span-2">
              <p className="text-lg font-bold text-white underline">About Us</p>
              <p className="mt-4 text-sm text-gray-400">
                MedAssist Healthcare Solutions is a healthcare consulting firm
                that provides end-to-end revenue cycle management solutions for
                healthcare providers.
              </p>

              {/* Social Media Icons */}
              <div className="mt-6 flex space-x-6">
                <a
                  href="https://twitter.com"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://facebook.com"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            {/* Services Section */}
            <div className="col-span-2 sm:col-span-1">
              <p className="text-lg font-bold text-white underline">Services</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Pain Management
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Cardiology
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Oncology
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links Section */}
            <div className="col-span-2 sm:col-span-1">
              <p className="text-lg font-bold text-white underline">
                Quick Links
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="col-span-2 sm:col-span-1">
              <p className="text-lg font-bold text-white underline">
                Contact Us
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="tel:+917984581428"
                    className="flex items-center text-gray-400 hover:text-white transition"
                  >
                    <span className="mr-2">
                      <Phone size={20} />
                    </span>
                    +91 7984581428
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@medassist.com"
                    className="flex items-center text-gray-400 hover:text-white transition"
                  >
                    <span className="mr-2">
                      <Mail size={20} />
                    </span>
                    info@medassist.com
                  </a>
                </li>
                <li className="flex items-start text-gray-400 hover:text-white transition">
                  <span className="mr-2">
                    <Map size={20} />
                  </span>
                  <p>123 MedAssist Street, Healthcare City, NY 12345</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-400">
              &copy; 2024. MedAssist Healthcare. All rights reserved.
            </p>

            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
