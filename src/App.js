import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import About from './pages/About';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import HeroSection from './pages/HeroSection';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';
import Blogs from './components/dashboard/Blogs';
import DashboardProducts from './components/dashboard/DashboardProducts';
import ContactUs from './pages/ContacUs';
import { baseUrl } from './BaseUrl';
import axios from 'axios';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      axios.get(`${baseUrl}/api/admin/dashboard`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(() => {
        setIsAuthenticated(true);
      }).catch(() => {
        localStorage.removeItem('adminToken');
        setIsAuthenticated(false);
      });
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };


  return (
    <Router>
      <div className="min-h-screen bg-gray-100 rubik-dirt-regular text-[#e67429fa]">
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
    

          <Route
            path="/admin/login"
            
            element={<AdminLogin  onLogin={handleLogin} />}
          />
          <Route
          path="/admin"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        >
            <Route index   element={<DashboardProducts />} />
            <Route path="/admin/blogs" element={<Blogs />} />
            </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
