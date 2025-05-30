import React from 'react';

const cats = [
  { id: 101, name: 'Whiskers', age: 2 },
  { id: 102, name: 'Mittens', age: 1 },
  { id: 103, name: 'Shadow', age: 3 },
  { id: 104, name: 'Simba', age: 4 },
  { id: 105, name: 'Luna', age: 2 },
  { id: 106, name: 'Oreo', age: 5 },
  { id: 107, name: 'Ginger', age: 3 },
  { id: 108, name: 'Smokey', age: 2 },
  { id: 109, name: 'Chloe', age: 1 },
  { id: 110, name: 'Leo', age: 4 },
  { id: 111, name: 'Daisy', age: 3 },
  { id: 112, name: 'Toby', age: 2 },
  { id: 113, name: 'Milo', age: 1 },
  { id: 114, name: 'Sassy', age: 5 },
  { id: 115, name: 'Peaches', age: 2 },
  { id: 116, name: 'Nala', age: 4 },
  { id: 117, name: 'Coco', age: 3 },
  { id: 118, name: 'Zoe', age: 1 },
  { id: 119, name: 'Pumpkin', age: 3 },
  { id: 120, name: 'Bella', age: 2 },
];

export default function CatList() {
  function handleAdopt(catName) {
    alert(`You adopted ${catName}! 🐱`);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-pink-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Available Cats for Adoption</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cats.map((cat) => (
          <div
            key={cat.id}
            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center border border-gray-200"
          >
            <img
              src={`https://placekitten.com/300/200?image=${cat.id}`}
              alt={cat.name}
              className="rounded-lg mb-4 w-full object-cover h-48"
            />
            <h2 className="text-xl font-bold text-gray-700">{cat.name}</h2>
            <p className="text-gray-500 mb-4">Age: {cat.age} years</p>
            <button
              onClick={() => handleAdopt(cat.name)}
              className="bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2 px-4 rounded-full hover:from-pink-500 hover:to-pink-700 transition-all font-semibold shadow-md"
            >
              Adopt Pet
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
