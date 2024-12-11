import React, { useState } from "react";
import { Home, Sofa, Lamp, ShoppingCart, Star } from "lucide-react";
import ProductList from "./ProducatList";

const categories = [
  { name: "All", icon: <Home size={24} /> },
  { name: "Living Room", icon: <Sofa size={24} /> },
  { name: "Dining", icon: <Lamp size={24} /> },
  { name: "Office", icon: <ShoppingCart size={24} /> },
  { name: "Bedrooms", icon: <Star size={24} /> },
];

const products = [
  {
    name: "Modern Sofa",
    description: "Comfortable and stylish sofa for your living room",
    price: 1299.99,
    image: "https://media.istockphoto.com/id/1926860167/photo/front-view-of-a-cozy-elegant-and-modern-living-room-with-gray-sofa-windows-with-decoration.webp?a=1&b=1&s=612x612&w=0&k=20&c=LS4TOSZtMTu59P8BUnw8RSLozMWKA57OqUF9DSm5Ihk=",
    category: "Living Room",
  },
  {
    name: "Wooden Dining Table",
    description: "Elegant dining table made from high-quality wood",
    price: 899.99,
    image: "https://plus.unsplash.com/premium_photo-1670359036016-3fc5bde40db6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGlubmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Dining",
  },
  {
    name: "Office Chair",
    description: "Ergonomic office chair with lumbar support",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwZnVybml0dXJlJTIwc2V0fGVufDB8fDB8fHw%3D",
    category: "Office",
  },
  {
    name: "Bedroom Wardrobe",
    description: "Spacious wardrobe for all your bedroom storage needs",
    price: 799.99,
    image: "https://media.istockphoto.com/id/2025383353/photo/modern-contemporary-cozy-white-bedroom-view-from-outside-the-room-through-the-door-3d-render.webp?a=1&b=1&s=612x612&w=0&k=20&c=7yfX0C2TPqoKuo_859H2jBeZyLY4SDIbl9K6UxPLQPM=",
    category: "Bedrooms",
  },
];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8">
          {categories.map((category, index) => (
            <button
              key={`${category.name}-${index}`}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex flex-col items-center p-4 rounded-lg transition-all ${
                selectedCategory === category.name
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-100"
              }`}
            >
              {category.icon}
              <span className="mt-2">{category.name}</span>
            </button>
          ))}
        </div>
        <ProductList
          products={products}
          selectedCategory={selectedCategory}
        />
      </div>
    </section>
  );
}

export default Products;
