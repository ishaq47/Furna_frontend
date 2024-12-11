import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Elegant Interiors</h3>
            <p className="text-gray-300 text-sm">
              Transforming spaces with style and comfort since 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-soft-gold transition">Home</Link></li>
              <li><Link to="/products" className="hover:text-soft-gold transition">Products</Link></li>
              <li><Link to="/about" className="hover:text-soft-gold transition">About</Link></li>
              <li><Link to="/admin/login" className="hover:text-soft-gold transition">Admin</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <p className="text-gray-300 text-sm">Qambar<br />
              Swat Famouse, Furniture House </p>
            <p className="text-gray-300 text-sm">Phone: (+92) 3499236132</p>
            <p className="text-gray-300 text-sm">Email: abuzarkhanyousafzai0@gmail.com</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; 2024 Elegant Interiors. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <p className="hover:text-soft-gold transition">Privacy Policy</p>
            <p className="hover:text-soft-gold transition">Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;