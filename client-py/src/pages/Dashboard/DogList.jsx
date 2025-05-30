import React from 'react';

const dogs = [
  { id: 1, name: 'Buddy', age: 2 },
  { id: 2, name: 'Luna', age: 1 },
  { id: 3, name: 'Charlie', age: 4 },
  { id: 4, name: 'Bella', age: 3 },
  { id: 5, name: 'Max', age: 5 },
  { id: 6, name: 'Daisy', age: 2 },
  { id: 7, name: 'Rocky', age: 3 },
  { id: 8, name: 'Molly', age: 1 },
  { id: 9, name: 'Cooper', age: 4 },
  { id: 10, name: 'Sadie', age: 2 },
  { id: 11, name: 'Bear', age: 3 },
  { id: 12, name: 'Lola', age: 5 },
  { id: 13, name: 'Toby', age: 1 },
  { id: 14, name: 'Coco', age: 4 },
  { id: 15, name: 'Zeus', age: 3 },
  { id: 16, name: 'Ruby', age: 2 },
  { id: 17, name: 'Bentley', age: 5 },
  { id: 18, name: 'Rosie', age: 1 },
  { id: 19, name: 'Milo', age: 2 },
  { id: 20, name: 'Chloe', age: 3 },
];

export default function DogList() {
  function handleAdopt(dogName) {
    alert(`You adopted ${dogName}! 🐶`);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-pink-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Available Dogs for Adoption
      </h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {dogs.map((dog) => (
          <div
            key={dog.id}
            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center border border-gray-200"
          >
            <img
              src={`https://placedog.net/300/200?id=${dog.id}`}
              alt={dog.name}
              className="rounded-lg mb-4 w-full object-cover h-48"
            />
            <h2 className="text-xl font-bold text-gray-700">{dog.name}</h2>
            <p className="text-gray-500 mb-4">Age: {dog.age} years</p>
            <button
              onClick={() => handleAdopt(dog.name)}
              className="bg-gradient-to-r from-green-400 to-green-600 text-white py-2 px-4 rounded-full hover:from-green-500 hover:to-green-700 transition-all font-semibold shadow-md"
            >
              Adopt Pet
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
