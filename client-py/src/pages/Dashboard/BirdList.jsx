import React, { useState } from 'react';

const birdNames = [
  "Tweety",
  "Coco",
  "Kiwi",
  "Sunny",
  "Buddy",
  "Skittles",
  "Peaches",
  "Rio",
  "Pip",
  "Jasper",
  "Mango",
  "Sky",
  "Angel",
  "Bingo",
  "Peanut",
  "Zazu",
  "Tiki",
  "Chirpy",
  "Jazz",
  "Bluebell"
];

// Static images of domestic birds
const birdImages = [
  "https://cdn.pixabay.com/photo/2017/08/02/21/24/budgerigar-2579967_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/01/20/15/07/cockatiel-604675_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/01/31/21/11/canary-2026842_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/02/01/22/02/cockatiel-2036811_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/01/31/21/07/parakeet-2026840_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/03/27/16/57/parrot-3264491_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/01/11/18/14/parrot-3927300_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/09/02/12/18/parakeet-918198_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/06/23/22/00/cockatiel-2434303_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/10/03/16/20/parakeet-4521483_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/05/08/14/32/parrot-757152_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/05/08/14/30/parrot-757143_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/05/10/22/05/bird-2307068_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/09/18/18/26/parrot-950277_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/04/28/22/25/parrot-2265342_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/06/05/00/41/parrot-2373750_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/01/23/15/16/budgerigar-2002652_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/09/14/21/54/bird-4473037_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/07/19/15/37/bird-1524795_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/05/15/16/38/bird-1392375_1280.jpg",
];

// Placeholder image if original fails
const placeholderImg = "https://via.placeholder.com/400x300?text=No+Image";

export default function BirdList() {
  const [birds] = useState(birdImages);

  // Handler for broken images - swap src to placeholder
  function handleImageError(event) {
    event.target.src = placeholderImg;
  }

  function handleAdopt(index) {
    alert(`You adopted ${birdNames[index] || `Bird #${index + 1}`}! 🦜🎉`);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-yellow-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Available Domestic Birds for Adoption</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {birds.map((url, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center border border-gray-200"
          >
            <img
              src={url}
              alt={birdNames[index] || "Bird"}
              onError={handleImageError}
              className="rounded-lg mb-4 w-full object-cover h-48"
            />
            <h2 className="text-xl font-bold text-gray-700">{birdNames[index] || `Bird #${index + 1}`}</h2>
            <button
              onClick={() => handleAdopt(index)}
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
