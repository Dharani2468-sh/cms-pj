import React from 'react';

const birds = [
  { id: 201, name: 'Kiwi', age: 1 },
  { id: 202, name: 'Polly', age: 3 },
  { id: 203, name: 'Sky', age: 2 },
  { id: 204, name: 'Sunny', age: 4 },
  { id: 205, name: 'Buddy', age: 1 },
  { id: 206, name: 'Angel', age: 3 },
  { id: 207, name: 'Coco', age: 2 },
  { id: 208, name: 'Jazz', age: 5 },
  { id: 209, name: 'Mango', age: 2 },
  { id: 210, name: 'Pepper', age: 4 },
  { id: 211, name: 'Rio', age: 1 },
  { id: 212, name: 'Blue', age: 3 },
  { id: 213, name: 'Lola', age: 2 },
  { id: 214, name: 'Zephyr', age: 5 },
  { id: 215, name: 'Bella', age: 3 },
  { id: 216, name: 'Echo', age: 4 },
  { id: 217, name: 'Zazu', age: 2 },
  { id: 218, name: 'Skye', age: 1 },
  { id: 219, name: 'Rio', age: 3 },
  { id: 220, name: 'Juno', age: 2 },
];

const birdImages = [
  "https://upload.wikimedia.org/wikipedia/commons/3/32/House_sparrow04.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6b/Ara_ararauna_Luc_Viatour.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/92/Bald_Eagle_Portrait.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/4/45/Peacock_Plumage.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/56/Owl_eyes.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/4/4d/Indian_Roller_%28Coracias_benghalensis%29_in_Hyderabad_W_IMG_8615.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6e/Hummingbird_in_flight.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/dc/Flamingo_Lake_Bogoria_Kenya_Luca_Galuzzi_2004.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/a/a1/Red-Lored_Parrot.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/7/7f/Blackbird_male.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2e/Blue_Tit_-_parus_caeruleus.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/3e/American_robin.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/5f/Puffin_with_fish.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/f/f3/Rainbow_Lorikeet_2_-_Christopher_Watson.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/c/cb/Indian_peacock_Pavo_cristatus.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/da/Greater_Coucal_%28Centropus_sinensis%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/0/04/Kingfisher_bird.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/1/12/White_Stork_Ciconia_ciconia.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a0/Swallow_bird.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/7/7d/Common_Kingfisher_Alcedo_atthis.jpg",
];

export default function BirdList() {
  function handleAdopt(birdName) {
    alert(`You adopted ${birdName}! 🐦`);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Available Birds for Adoption
      </h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {birds.map((bird, index) => (
          <div
            key={bird.id}
            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center border border-gray-200"
          >
            <img
              src={birdImages[index % birdImages.length]}
              alt={bird.name}
              className="rounded-lg mb-4 w-full object-cover h-48"
            />
            <h2 className="text-xl font-bold text-gray-700">{bird.name}</h2>
            <p className="text-gray-500 mb-4">Age: {bird.age} years</p>
            <button
              onClick={() => handleAdopt(bird.name)}
              className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white py-2 px-4 rounded-full hover:from-cyan-500 hover:to-blue-700 transition-all font-semibold shadow-md"
            >
              Adopt Pet
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
