import Image from "next/image";
import React from "react";
import SharedHeading from "@/components/SharedHeading";

function CourseFAQ() {
  return (
    <div className="container mx-auto justify-center flex items-center gap-5 py-20">
      <div className="flex-1 flex justify-center">
        <Image
          className="rounded-xl"
          width={450}
          height={400}
          src="/image/faq-img.png"
        ></Image>
      </div>
      <div className="flex-1 ">
        <SharedHeading
          className="text-start items-start"
          tagline="Most Asked Question"
          heading="Powerful Dashboard And High Performance Framework"
        />
        <div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300 w-full">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">
              01. What Courses do you offer?
            </div>
            <div className="collapse-content text-sm">
              We offer a wide range of courses in various subjects, including
              science, technology, engineering, mathematics, humanities, and
              social sciences. Our courses are designed for different education
              levels, from primary school to university.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              02. How can Teachers Effectively manage a Diverse Classroom?
            </div>
            <div className="collapse-content text-sm">
              We offer a wide range of courses in various subjects, including
              science, technology, engineering, mathematics, humanities, and
              social sciences. Our courses are designed for different education
              levels, from primary school to university.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              03. How Is Speacial Education Delivered in Inclusive Classroom?
            </div>
            <div className="collapse-content text-sm">
              We offer a wide range of courses in various subjects, including
              science, technology, engineering, mathematics, humanities, and
              social sciences. Our courses are designed for different education
              levels, from primary school to university.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseFAQ;
