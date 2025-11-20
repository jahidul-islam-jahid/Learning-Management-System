import Image from "next/image";
import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";

function AboutComponent() {
  return (
    <div className="container mx-auto py-20 px-4 flex flex-col lg:flex-row gap-8 lg:gap-12">
      {/* Left: Image + Video */}
      <div className="flex-1 flex flex-col md:flex-row gap-6 lg:gap-8 py-10">
        <div className="flex-1 flex justify-center">
          {/* Updated Image */}
          <Image
            className="rounded-2xl w-full h-auto max-w-[400px] shadow-lg"
            src="/image/about-img-2.jpg"
            width={400}
            height={200}
            alt="Students engaged in online learning"
            priority
          />
        </div>
        <div className="flex-1 flex justify-center">
          {/* Updated Video */}
          <div className="relative w-full aspect-video max-w-[400px]">
            <iframe
              className="rounded-2xl absolute inset-0 w-full h-full shadow-lg"
              src="https://www.youtube.com/embed/JwC-Qx1lJso"
              title="Online education platform overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Right: Text + Stats */}
      <div className="flex-1 flex flex-col gap-6 lg:gap-8 justify-center">
        <span className="inline-flex items-center gap-2 bg-white border border-gray-300 rounded-full px-4 py-2 text-sm font-semibold hover:shadow-md transition shadow-sm w-fit">
          <AiFillThunderbolt className="text-yellow-500 bg-blue-100 p-1 rounded-full text-xl" />
          Welcome to Online Education
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Over 10 Years in Distant Learning for Skill Development
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          Compellingly procrastinate equity invested markets with efficient
          process improvements. Actualize mission-critical partnerships with
          integrated portals. Authoritatively optimize low-risk high-yield
          metrics and plug-and-play potentialities.
        </p>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
          <div className="flex items-center gap-3">
            <div className="bg-blue-50 p-3 rounded-full">
              <FaUserGraduate className="text-2xl text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">6.7K+</p>
              <p className="text-gray-600">Active students</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-blue-50 p-3 rounded-full">
              <FaUserGraduate className="text-2xl text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">500+</p>
              <p className="text-gray-600">Courses offered</p>
            </div>
          </div>
        </div>

        <button className="from-blue-600 to-purple-600 bg-gradient-to-r text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg w-fit font-semibold text-lg">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default AboutComponent;
