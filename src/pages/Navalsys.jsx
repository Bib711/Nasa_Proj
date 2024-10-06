import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import './Navalsys.css'

const Navalsys = () => {
  const navigate = useNavigate();

  const handleStartTest = () => {
    console.log('Navigating to quiz...');
    navigate('/NQ', { replace: true });
  };

  return (
    <div className='min-h-screen w-screen flex justify-center items-center bg-log bg-opacity-50'>
      <div className="p-12 bg-gradient-to-br from-blue-100 to-blue-300 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-6xl border border-blue-200">
        <h1 className="text-5xl font-bold text-black text-center mb-10">WELCOME</h1>

        <nav className="flex justify-center space-x-8 mb-12">
          <a href="/Home" className="text-black text-lg font-semibold hover:text-blue-700 transition-colors">
            LOGOUT
          </a>
          <a href="/NavalDash" className="text-black text-lg font-semibold hover:text-blue-700 transition-colors">
            Dashboard
          </a>
          <a className="text-black text-lg font-semibold hover:text-blue-700 transition-colors">
            Notifications
          </a>
        </nav>

        <div className="flex flex-col items-center space-y-8">
          <div className="w-full max-w-2xl p-8 bg-white bg-opacity-50 rounded-2xl backdrop-filter backdrop-blur-md">
            <h2 className="text-3xl font-semibold text-black mb-4">Welcome to the Naval Systems Quiz! </h2>
            <p className="text-black">Test your knowledge of naval systems and maritime operations. Good luck!</p>
          </div>

          <Button 
            className="w-48 h-14 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-lg" 
            onClick={handleStartTest}
          >
            Start Test
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navalsys;
