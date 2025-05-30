import React from "react";

// src/layouts/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 text-sm mt-8">
      © {new Date().getFullYear()} The Pet Nest. Developed by E. Dharani & A. Jessica Grace.
    </footer>
  );
}
