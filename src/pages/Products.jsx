import React, { useState, useEffect } from "react";
import { Home, Sofa, Lamp, ShoppingCart, Star } from "lucide-react";
import ProductList from "./ProducatList";
import axios from 'axios';
import { baseUrl } from "../BaseUrl";

const categories = [
  { name: "All", icon: <Home size={24} /> },
  { name: "Living Room", icon: <Sofa size={24} /> },
  { name: "Dining", icon: <Lamp size={24} /> },
  { name: "Office", icon: <ShoppingCart size={24} /> },
  { name: "Bedrooms", icon: <Star size={24} /> },
];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/products`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

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
