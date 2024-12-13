import React from "react";

const Home = () => {
  return (
    <div className="bg-light-gray min-h-screen"> {/* Background color set to Light Gray */}
      {/* Hero Section */}
      <section className="relative bg-cover bg-center min-h-screen flex flex-col items-center justify-center" style={{ backgroundImage: 'url("https://www.royhomedesign.com/wp-content/uploads/2017/03/the-best-wooden-furniture-material-in-maple-wood-dining-room-furniture-sets-for-home-furniture-interior-decoration.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Black overlay for the background */}
        <div className="container mx-auto text-center  text-white py-32 relative">
          <h1 className="md:text-5xl text-3xl font-bold mb-4 text-[#e67429fa] ">Discover Premium Furniture</h1>
          <p className="text-lg mb-6 text-white font-semibold">Elevate your living space with our carefully curated collection.</p>
          <button className="bg-soft-gold hover:bg-orange-400 hover:text-white  text-white py-3 px-6 rounded-full text-xl font-semibold">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
