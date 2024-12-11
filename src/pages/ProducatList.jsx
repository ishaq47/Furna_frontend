import React from "react";

function ProductCard({ product }) {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+923499236132";
    const message = `Hello, I'm interested in your product: ${product.name}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-sm mx-auto">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-blue-900">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-blue-900">
            Rs{product.price.toFixed(2)}
          </span>
          <button
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300"
          >
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductList({ products, selectedCategory }) {
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
      {filteredProducts.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
