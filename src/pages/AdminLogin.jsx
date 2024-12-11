import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin({ onLogin }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock login logic
    onLogin();
    navigate('/admin/dashboard');
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold  font-roboto mb-4">Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input 
            type="email" 
            id="email" 
            className="w-full px-3 py-2 border rounded"
            required 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input 
            type="password" 
            id="password" 
            className="w-full px-3 py-2 border rounded"
            required 
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
