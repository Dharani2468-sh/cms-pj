import React from "react";

function About() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">About The Pet Nest</h1>
      <p className="text-lg mb-4">
        Welcome to <strong>The Pet Nest</strong> — a warm, loving digital home for pets looking
        for their forever families. We believe every animal deserves a second chance at love,
        care, and companionship.
      </p>

      <h2 className="text-2xl font-semibold text-pink-500 mb-2">Our Mission</h2>
      <p className="mb-4">
        Our mission is simple: connect kind-hearted adopters with adorable pets in need.
        Whether you're looking for a playful puppy, a cozy cat, or even a chirpy bird, The
        Pet Nest helps you find your perfect match.
      </p>

      <h2 className="text-2xl font-semibold text-pink-500 mb-2">Why Choose Us?</h2>
      <ul className="list-disc list-inside mb-6">
        <li>❤ Verified and well-cared-for animals</li>
        <li>🐾 Easy-to-use interface for browsing and adopting</li>
        <li>🏡 Partnered with trusted shelters and rescue centers</li>
        <li>📞 Supportive team to guide you through the adoption process</li>
      </ul>

      <h2 className="text-2xl font-semibold text-pink-500 mb-2">Join Us in Making a Difference</h2>
      <p className="mb-4">
        Adopting a pet doesn’t just change their life — it changes yours. Become part of a
        growing community that values compassion, responsibility, and unconditional love.
      </p>

      <p className="italic text-sm text-gray-500">
        “Saving one animal won’t change the world, but surely, for that one animal, the world
        will change forever.”
      </p>
    </div>
  );
}

export default About;