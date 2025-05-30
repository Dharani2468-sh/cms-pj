import React from 'react';

const rabbits = [
  { id: 301, name: 'Thumper', age: 1 },
  { id: 302, name: 'BunBun', age: 2 },
  { id: 303, name: 'Fluffy', age: 3 },
  { id: 304, name: 'Coco', age: 2 },
  { id: 305, name: 'Snowball', age: 1 },
  { id: 306, name: 'Nibbles', age: 4 },
  { id: 307, name: 'Hazel', age: 2 },
  { id: 308, name: 'Cotton', age: 3 },
  { id: 309, name: 'Daisy', age: 1 },
  { id: 310, name: 'Binky', age: 2 },
  { id: 311, name: 'Patches', age: 4 },
  { id: 312, name: 'Pumpkin', age: 3 },
  { id: 313, name: 'Lola', age: 2 },
  { id: 314, name: 'Honey', age: 1 },
  { id: 315, name: 'Pebbles', age: 3 },
  { id: 316, name: 'Snickers', age: 2 },
  { id: 317, name: 'Muffin', age: 4 },
  { id: 318, name: 'Basil', age: 1 },
  { id: 319, name: 'Chester', age: 2 },
  { id: 320, name: 'Willow', age: 3 },
];

export default function RabbitList() {
  function handleAdopt(rabbitName) {
    alert(`You adopted ${rabbitName}! 🐇`);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Available Rabbits for Adoption</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {rabbits.map((rabbit) => (
          <div
            key={rabbit.id}
            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center border border-gray-200"
          >
            <img
              src={`https://loremflickr.com/320/240/rabbit?random=${rabbit.id}`}
              alt={rabbit.name}
              className="rounded-lg mb-4 w-full object-cover h-48"
            />
            <h2 className="text-xl font-bold text-gray-700">{rabbit.name}</h2>
            <p className="text-gray-500 mb-4">Age: {rabbit.age} years</p>
            <button
              onClick={() => handleAdopt(rabbit.name)}
              className="bg-gradient-to-r from-purple-400 to-pink-600 text-white py-2 px-4 rounded-full hover:from-purple-500 hover:to-pink-700 transition-all font-semibold shadow-md"
            >
              Adopt Pet
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
