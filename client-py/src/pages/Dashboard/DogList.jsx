import React, { useEffect, useState } from 'react';
import axios from 'axios';

const dogNames = [
  "Buddy",
  "Bella",
  "Charlie",
  "Lucy",
  "Max",
  "Daisy",
  "Bailey",
  "Lola",
  "Rocky",
  "Sadie",
  "Cooper",
  "Molly",
  "Duke",
  "Maggie",
  "Bear",
  "Sophie",
  "Toby",
  "Chloe",
  "Jack",
  "Zoey"
];

export default function DogList() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.thedogapi.com/v1/images/search?limit=20', {
      headers: {
        'x-api-key': 'YOUR_DOG_API_KEY_HERE', // Replace with your actual Dog API key
      },
    })
    .then(response => {
      setDogs(response.data);
      setLoading(false);
    })
    .catch(error => {
      console.error("Error fetching dogs:", error);
      setLoading(false);
    });
  }, []);

  function handleAdopt(index) {
    alert(`You adopted ${dogNames[index] || `Dog #${index + 1}`}! 🐶🎉`);
  }

  if (loading) {
    return <div className="text-center p-10">Loading puppies...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-yellow-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Available Puppies for Adoption</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {dogs.map((dog, index) => (
          <div
            key={dog.id || index}
            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center border border-gray-200"
          >
            <img
              src={dog.url}
              alt={dogNames[index] || "Puppy"}
              className="rounded-lg mb-4 w-full object-cover h-48"
            />
            <h2 className="text-xl font-bold text-gray-700">{dogNames[index] || `Dog #${index + 1}`}</h2>
            <button
              onClick={() => handleAdopt(index)}
              className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all font-semibold shadow-md"
            >
              Adopt Pet
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
