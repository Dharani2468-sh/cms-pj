import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-white to-pink-100 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-[#2B124C] mb-2">
            About <span className="text-[#FF7EB9]">The Pet Nest</span>
          </h1>
          <p className="text-gray-600 text-lg">
            A loving digital home for pets looking for their forever families. 🐾
          </p>
        </div>

        {/* Card 1: Welcome */}
        <div className="bg-white/80 backdrop-blur-sm border border-purple-200 rounded-2xl shadow-lg p-6">
          <p className="text-lg text-gray-800">
            Welcome to <strong>The Pet Nest</strong> — a warm, loving digital home for pets looking
            for their forever families. We believe every animal deserves a second chance at love,
            care, and companionship.
          </p>
        </div>

        {/* Card 2: Mission */}
        <div className="bg-white/80 backdrop-blur-sm border border-purple-200 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-[#6C63FF] mb-2">🎯 Our Mission</h2>
          <p className="text-gray-800">
            Our mission is simple: connect kind-hearted adopters with adorable pets in need.
            Whether you're looking for a playful puppy, a cozy cat, or even a chirpy bird, The
            Pet Nest helps you find your perfect match.
          </p>
        </div>

        {/* Card 3: Why Choose Us */}
        <div className="bg-white/80 backdrop-blur-sm border border-purple-200 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-[#6C63FF] mb-2">💖 Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>❤ Verified and well-cared-for animals</li>
            <li>🐾 Easy-to-use interface for browsing and adopting</li>
            <li>🏡 Partnered with trusted shelters and rescue centers</li>
            <li>📞 Supportive team to guide you through the adoption process</li>
          </ul>
        </div>

        {/* Card 4: Join Us */}
        <div className="bg-white/80 backdrop-blur-sm border border-purple-200 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-[#6C63FF] mb-2">🤝 Join Us in Making a Difference</h2>
          <p className="text-gray-800 mb-3">
            Adopting a pet doesn’t just change their life — it changes yours. Become part of a
            growing community that values compassion, responsibility, and unconditional love.
          </p>
          <p className="italic text-sm text-gray-600 border-t pt-3">
            “Saving one animal won’t change the world, but surely, for that one animal, the world
            will change forever.”
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
