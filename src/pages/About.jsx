// src/pages/About.js
import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">About Furniture World</h1>
      <div className=" mx-auto  p-6  flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src="https://m.media-amazon.com/images/I/713RUlcx90L._SL1200_.jpg"
            alt="Furniture World"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <p className="text-gray-700 md:text-xl  mb-4">
            Furniture World is dedicated to providing high-quality, stylish furniture
            for modern homes. With years of experience in the industry, we understand
            the importance of comfort, design, and affordability.
          </p>
          <p className="text-gray-700">
            Our mission is to help you create beautiful living spaces that reflect
            your personal style and meet your functional needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
