"use client";
import React, { useEffect, useState } from "react";
import CourseCard from "@/app/courses/courseCard/page";
import SharedHeading from "@/components/SharedHeading";

function page() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const [currentCategory, setCurrentCategory] = useState(0);
  console.log(currentCategory);

  const filteredCategory =
    currentCategory != 0
      ? courses.filter((item) => item.category == currentCategory)
      : courses;

  return (
    <div>
      <div className="pt-10">
        <SharedHeading tagline="Top Class Courses" heading="Explore Featured Courses"/>
      </div>
      <div className="container mx-auto justify-center mt-10 flex gap-4">
        <button
          onClick={() => setCurrentCategory(0)}
          className="cursor-pointer px-4 py-2 border bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full "
        >
          All Course
        </button>
        {categories.map((category) => (
          <button
            onClick={() => setCurrentCategory(category.name)}
            key={category.id}
            className="cursor-pointer px-4 py-2 border bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full "
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-5 container mx-auto justify-center py-15">
        {filteredCategory.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default page;
