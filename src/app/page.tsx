"use client";
import { AiFillThunderbolt } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { FaVideo } from "react-icons/fa";
import Link from "next/link";
import AboutComponent from "@/components/AboutComponent";
import CourseComponent from "@/components/CourseComponent";
import SharedHeading from "@/components/SharedHeading";
import ChooseUsComponent from "@/components/ChooseUsComponent";
import CountList from "@/components/CountList";
import CourseFAQ from "@/components/CourseFAQ";

function Page() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setCategories(data.categoryList));
  }, []);
  return (
    <div>
      <div className="bg-[#EFF2F9] flex items-center justify-center min-h-screen px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* LEFT CONTENT */}
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 bg-white border border-gray-300 rounded-full px-4 py-2 text-sm font-semibold hover:shadow-md transition">
              <AiFillThunderbolt className="text-yellow-500 bg-blue-100 p-1 rounded-full text-xl" />
              Welcome to Online Education
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-snug text-gray-800">
              Start learning from the world's <br />
              <span className="text-blue-600">best institutions</span>
            </h2>

            <div className="flex items-center gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer">
                Get Started
              </button>

              <Link target="_blank" href="https://www.youtube.com/">
                <button className="px-6 py-3 border border-gray-400 rounded-lg font-semibold bg-white transition flex items-center gap-4 cursor-pointer">
                  <FaVideo className="text-xl cursor-pointer text-blue-600" />
                  Watch the video
                </button>
              </Link>
            </div>
            <p className="text-xl font-semibold">
              Explore <span className="text-blue-600">1350+</span> Courses
              within Subject
            </p>
          </div>

          {/* RIGHT HERO IMAGE */}
          <div className="flex-1 flex justify-center">
            <div className="w-[500px] h-[650px] bg-[url('/image/hero-img-1.png')] bg-cover bg-center rounded-lg shadow-lg"></div>
          </div>
        </div>
      </div>

      {/* aboutcomponent */}
      <AboutComponent></AboutComponent>

      <div className="py-10">
        <SharedHeading
          tagline="Our Course Categories"
          heading="Select The Industry Where You Want To Learn"
        />
        <div className="container mx-auto flex flex-wrap justify-center gap-5 mb-10">
          {categories.map(
            (item: {
              id: number;
              title: string;
              icon: string;
              slug: string;
            }) => (
              <button className="from-blue-600 to-purple-600 bg-gradient-to-r text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg w-fit font-semibold text-lg cursor-pointer">
                {item.title}
              </button>
            )
          )}
        </div>
      </div>
      <ChooseUsComponent></ChooseUsComponent>
      <CourseComponent></CourseComponent>

      <div className="py-10">
        <CountList></CountList>
      </div>
      <CourseFAQ></CourseFAQ>
    </div>
  );
}

export default Page;
