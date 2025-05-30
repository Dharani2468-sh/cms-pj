import React from "react";

export default function DeveloperPage() {
  const developers = [
    {
      name: "E. Dharani",
      department: "Computer Science and Design (CSD)",
    },
    {
      name: "A. Jessica Grace",
      department: "Cyber Security",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Meet the Developers</h1>
        <p className="text-gray-600 mb-10">
          This project was developed with dedication and innovation for a giving a new life to the pets
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {developers.map((dev, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-black mb-2">{dev.name}</h2>
              <p className="text-gray-700">{dev.department}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
