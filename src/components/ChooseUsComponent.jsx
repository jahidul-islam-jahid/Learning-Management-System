import React, { useEffect, useState } from "react";
import SharedComponent from "./SharedHeading";

function ChooseUsComponent() {
  const [chooseUs, setChooseUs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chooseUsCategory")
      .then((res) => res.json())
      .then((data) => setChooseUs(data));
  }, []);
  console.log(chooseUs);
  return (
    <div className="bg-black py-30">
      <SharedComponent
        className="text-white"
        tagline="Why Choose Us"
        heading="Explore Yourself All Over The World"
      />

      <div
        className="container mx-auto grid md:grid-cols-3 gap-10 py-5 text-white
       "
      >
        {chooseUs.map((step) => (
          <div
            key={step.id}
            className="text-center border border-gray-700 px-4 py-10 roundedxl
             group text-center 
            bg-[#0d0d0d] 
           from-blue-600 to-purple-600 hover:border-gradient-to-r
            px-6 py-12 rounded-2xl 
            shadow-lg 
            hover:shadow-teal-900/30 
            transition-all 
            duration-600
            hover:-translate-y-2"
          >
            <img
              src={step.image}
              alt={step.title}
              className="w-40 h-40 mx-auto rounded-full object-cover border-4 from-blue-600 to-purple-600 bg-gradient-to-r"
            />
            <h2 className="text-xl font-semibold mt-4">{step.title}</h2>
            <p className="text-gray-400 text-sm mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseUsComponent;
