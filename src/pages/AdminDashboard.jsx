import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';



function AdminDashboard() {
  return (
    
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="md:w-3/4 md:p-4">
         <Outlet />
        </div>
      </div>
    
  );
}

export default AdminDashboard;
