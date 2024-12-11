// src/pages/About.js
import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">About Furniture World</h1>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
        <p className="text-gray-600 mb-4">
          Furniture World is dedicated to providing high-quality, stylish furniture 
          for modern homes. With years of experience in the industry, we understand 
          the importance of comfort, design, and affordability.
        </p>
        <p className="text-gray-600">
          Our mission is to help you create beautiful living spaces that reflect 
          your personal style and meet your functional needs.
        </p>
      </div>
    </div>
  );
}

export default About;