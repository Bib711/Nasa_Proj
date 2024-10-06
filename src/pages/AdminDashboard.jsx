import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import './MissileDashboard.css'
const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleStartTest = () => {
    console.log('Navigating to quiz...');
    navigate('/NQ', { replace: true });
  };
  return (
    <div className='min-h-screen w-screen flex justify-center items-center bg-login'>
      <div className="p-8 bg-white from-blue-500 to-purple-500 rounded-lg shadow-lg w-full max-w-4xl">
        {/* Title */}
        <h1 className="text-4xl font-bold text-black text-center mb-8">WELCOME</h1>

        {/* Navbar */}
        <nav className="flex justify-center space-x-4 mb-8">
          <a href="/Home" className="text-black text-lg font-semibold hover:underline">
            LOGOUT
          </a>
          <a href="/MissileDash" className="text-black text-lg font-semibold hover:underline">
            Dashboard
          </a>
          <a className="text-black text-lg font-semibold hover:underline">
            Notifications
          </a>
        </nav>

        {/* Glassmorphism Card */}
        <div className="flex justify-center">
        <Button className="w-40 text-white bg-black rounded-lg hover:bg-black" onClick={handleStartTest}>
          Start Test
        </Button>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
