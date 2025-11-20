import React from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function TopHeader() {
  return (
    <div className="bg-gray-900 text-white py-2 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200">
              <FaPhone className="text-blue-400" />
              <span>+880 1690-030190</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200">
              <FaMapMarkerAlt className="text-red-400" />
              <span>Feni, Bangladesh</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <span className="text-gray-300 hidden sm:block">Follow Us</span>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200 transform hover:scale-110"
              >
                <FaFacebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors duration-200 transform hover:scale-110"
              >
                <FaInstagramSquare size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
              >
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;