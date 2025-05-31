import React, { useEffect, useState } from 'react';
import axios from 'axios';

const catNames = [
  "Whiskers",
  "Mittens",
  "Luna",
  "Oliver",
  "Bella",
  "Simba",
  "Chloe",
  "Leo",
  "Cleo",
  "Nala",
  "Felix",
  "Daisy",
  "Toby",
  "Sophie",
  "Milo",
  "Lily",
  "Charlie",
  "Zoe",
  "Max",
  "Willow"
];

export default function CatList() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=20', {
      headers: {
        'x-api-key': 'YOUR_API_KEY_HERE', // Replace with your actual API key
      },
    })
    .then(response => {
      setCats(response.data);
      setLoading(false);
    })
    .catch(error => {
      console.error("Error fetching cats:", error);
      setLoading(false);
    });
  }, []);

  function handleAdopt(index) {
    alert(`You adopted ${catNames[index] || `Kitten #${index + 1}`}! 🐱🎉`);
  }

  if (loading) {
    return <div className="text-center p-10">Loading kittens...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-pink-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Available Kittens for Adoption</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cats.map((cat, index) => (
          <div
            key={cat.id || index}
            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center border border-gray-200"
          >
            <img
              src={cat.url}
              alt={catNames[index] || "Kitten"}
              className="rounded-lg mb-4 w-full object-cover h-48"
            />
            <h2 className="text-xl font-bold text-gray-700">{catNames[index] || `Kitten #${index + 1}`}</h2>
            <button
              onClick={() => handleAdopt(index)}
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
