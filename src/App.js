import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import About from './pages/About';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import HeroSection from './pages/HeroSection';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login (mock login for simplicity)
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route 
            path="/admin/login" 
            element={<AdminLogin onLogin={handleLogin} />} 
          />
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
