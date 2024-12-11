import React from "react";

const Home = () => {
  return (
    <div className="bg-light-gray"> {/* Background color set to Light Gray */}
      {/* Hero Section */}
      <section className="relative bg-cover bg-center" style={{ backgroundImage: 'url("/path/to/your-image.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Black overlay for the background */}
        <div className="container mx-auto text-center text-white py-32 relative">
          <h1 className="text-4xl font-bold mb-4 text-deep-navy font-roboto">Discover Premium Furniture</h1>
          <p className="text-lg mb-6 text-black font-roboto">Elevate your living space with our carefully curated collection.</p>
          <button className="bg-soft-gold hover:bg-orange-400 hover:text-white  text-black py-3 px-6 rounded-lg text-xl font-roboto">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
