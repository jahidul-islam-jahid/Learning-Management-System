import React, { useEffect, useState } from "react";

function StatsSection() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setStats(data.countList));
  }, []);

  return (
    <div className="from-blue-600 to-purple-600 bg-gradient-to-r py-14">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 text-center text-white border-y border-white">
        {stats.map((item, index) => (
          <div
            key={item.id}
            className={`py-10 border-l border-white ${
              index === 0 ? "border-l-0" : ""
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold">{item.count}</h2>
            <p className="mt-2 text-sm tracking-wider font-semibold">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsSection;
