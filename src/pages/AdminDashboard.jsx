import React, { useState } from 'react';

function AdminDashboard() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Modern Sofa', price: 1299.99 },
    { id: 2, name: 'Wooden Dining Table', price: 899.99 }
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: ''
  });

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (newProduct.name && newProduct.price) {
      const product = {
        id: products.length + 1,
        name: newProduct.name,
        price: parseFloat(newProduct.price)
      };
      setProducts([...products, product]);
      setNewProduct({ name: '', price: '' });
    }
  };

 

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
      
        <div>
          <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
          <form 
            onSubmit={handleAddProduct} 
            className="bg-white p-6 rounded-lg shadow"
          >
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Product Name</label>
              <input
                type="text"
                value={newProduct.name}
                onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Price</label>
              <input
                type="number"
                value={newProduct.price}
                onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;



