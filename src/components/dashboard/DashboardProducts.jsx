import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pencil, Trash, Plus } from "lucide-react";

function Products() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", category: "", description: "", image: null });
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddOrUpdateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("price", newProduct.price);
    formData.append("category", newProduct.category);
    formData.append("description", newProduct.description);
    if (newProduct.image) formData.append("image", newProduct.image);

    try {
      if (editingProduct) {
        // Update product
        const response = await axios.put(`http://localhost:5000/api/products/${editingProduct._id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setProducts(products.map((p) => (p._id === editingProduct._id ? response.data : p)));
      } else {
        // Add product
        const response = await axios.post("http://localhost:5000/api/products", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setProducts([...products, response.data]);
      }
      resetForm();
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const resetForm = () => {
    setNewProduct({ name: "", price: "", category: "", description: "", image: null });
    setEditingProduct(null);
    setShowModal(false);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto ">
      <h1 className="text-3xl font-bold mb-6">Product Management</h1>
      <div className="overflow-x-auto w-full">
      <table className="w-full bg-white shadow rounded-lg ">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-start">Image</th>
            <th className="py-2 px-4 border-b text-start">Name</th>
            <th className="py-2 px-4 border-b text-start">Price</th>
            <th className="py-2 px-4 border-b text-start">Category</th>
            <th className="py-2 px-4 border-b text-start">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="py-2 px-4 border-b">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </td>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">Rs {product.price}</td>
              <td className="py-2 px-4 border-b">{product.category}</td>
              <td className="py-2 px-4 border-b">
                <div className="flex space-x-3">
                  <button
                    onClick={() => {
                      setEditingProduct(product);
                      setNewProduct(product);
                      setShowModal(true);
                    }}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
                    <Trash size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      {/* Floating Add Button */}
      <button
        onClick={() => {
          resetForm();
          setShowModal(true);
        }}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600">
        <Plus size={24} />
      </button>

      {/* Modal for Add/Edit Product */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">
              {editingProduct ? "Edit Product" : "Add Product"}
            </h2>
            <form onSubmit={handleAddOrUpdateProduct}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Product Name</label>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Price</label>
                <input
                  type="number"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Category</label>
                <select
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                  required>
                  <option value="">Select Category</option>
                  <option value="Living Room">Living Room</option>
                  <option value="Dining">Dining</option>
                  <option value="Office">Office</option>
                  <option value="Bedrooms">Bedrooms</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Description</label>
                <textarea
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Image</label>
                <input
                  type="file"
                  onChange={(e) => setNewProduct({ ...newProduct, image: e.target.files[0] })}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  {editingProduct ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
