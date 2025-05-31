import React from 'react';
import { Link } from 'react-router-dom';

const petCategories = [
  {
    name: 'Cat',
    iconId: 'IconCatPortrait',
    image: 'https://i.pinimg.com/736x/de/b6/6f/deb66f5e0189f113b4fc6573c0d3c3b5.jpg',
  },
  {
    name: 'Bird',
    iconId: 'IconBirdPortrait',
    image: 'https://cdn.britannica.com/35/3635-050-96241EC1/Scarlet-macaw-ara-macao.jpg',
  },
  {
    name: 'Guinea pig',
    iconId: 'IconRabbitPortrait',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzS-_pJb8cEJ8IvjGI8R_AKI6C_LwCmVZNTcA2dVdFnRFq4nC_zlPBeteUetQ3dDFTvdc&usqp=CAU',
  },
  {
    name: 'Dog',
    iconId: 'IconDogPortrait',
    image: 'https://static.toiimg.com/thumb/108134909/108134909.jpg?height=746&width=420&resizemode=76&imgsize=113884',
  },
];

export default function Intro() {
	return (
		
		<div className="p-8">
			<h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to the Dashboard App</h1>
			<p className="text-gray-600 mb-4">
				This app helps you organize your project notes, track your progress, and visualize
				important information all in one place.
			</p>
			<ul className="list-disc text-gray-700">
				<li>Add, edit, and manage your notes easily</li>
				<li>Track your project progress</li>
				<li>Get insights and visual summaries</li>
			</ul>
      <h2 className="text-4xl font-bold text-center mb-10 text-purple-800">Pet Categories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {petCategories.map((pet) => (
          <div
            key={pet.name}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
          >
            {/* Image Container */}
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
              <img
                src={pet.image}
                alt={pet.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Text & Button */}
            <div className="p-5 flex flex-col justify-between flex-grow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{pet.name}</h3>
              <Link
                to={`/categorized_pets/${pet.name}`}
                className="mt-auto inline-block bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition"
              >
                SEE MORE
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
	);
}
