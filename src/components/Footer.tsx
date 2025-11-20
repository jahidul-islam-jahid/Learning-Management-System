import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 ">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h2 className="text-white text-lg font-bold mb-4">LMS Academy</h2>
          <p className="text-gray-400">
            Learn anytime, anywhere with our interactive courses. Build your
            skills and advance your career.
          </p>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Courses</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Data Science
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                AI & Machine Learning
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Design & UX
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Tutorials
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <p>Email: support@lmsacademy.com</p>
          <p>Phone: +1 234 567 890</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8">
        <p className="text-center text-gray-500 py-4">
          &copy; {new Date().getFullYear()} LMS Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
