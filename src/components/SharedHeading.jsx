import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";

function SharedHeading({ tagline, heading, description = "", className = "" }) {
  return (
    <div className={`text-center max-w-3xl mx-auto px-4 mb-12 ${className}`}>
      {/* Animated badge */}
      <div className={`inline-flex items-center mb-3 ${className}`}>
        <span
          className={`px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide flex items-center gap-2 hover:shadow-md transition-all duration-300 group `}
        >
          <AiFillThunderbolt className={`text-yellow-500 text-lg group-hover:scale-110 transition-transform duration-300 ${className}`} />
          {tagline}
        </span>
      </div>

      <h1
        className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight ${className}`}
      >
        {heading}
      </h1>

      {description && (
        <p className="text-xl text-gray-600 leading-relaxed">{description}</p>
      )}
    </div>
  );
}

export default SharedHeading;
