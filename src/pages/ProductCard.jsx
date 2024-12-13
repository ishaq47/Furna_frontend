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
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 ">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold ">
            Rs {product.price}
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

export default ProductCard;
