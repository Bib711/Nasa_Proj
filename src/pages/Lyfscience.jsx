import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import './Lyfscience.css'

const Lyfscience = () => {
  const navigate = useNavigate();

  const handleStartTest = () => {
    console.log('Navigating to quiz...');
    navigate('/LCQ', { replace: true });
  };

  return (
    <div className='min-h-screen w-screen flex justify-center items-center bg-log bg-opacity-50'>
      <div className="p-12 bg-gradient-to-br from-blue-100 to-blue-300 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-6xl border border-blue-200">
        <h1 className="text-5xl font-bold text-black text-center mb-10">WELCOME</h1>

        <nav className="flex justify-center space-x-8 mb-12">
          <a href="/Home" className="text-black text-lg font-semibold hover:text-blue-700 transition-colors">
            LOGOUT
          </a>
          <a href="/LyfScienceDash" className="text-black text-lg font-semibold hover:text-blue-700 transition-colors">
            Dashboard
          </a>
          <a className="text-black text-lg font-semibold hover:text-blue-700 transition-colors">
            Notifications
          </a>
        </nav>

        <div className="flex flex-col items-center space-y-8">
          <div className="w-full max-w-2xl p-8 bg-white bg-opacity-50 rounded-2xl backdrop-filter backdrop-blur-md">
            <h2 className="text-3xl font-semibold text-black mb-4">Welcome to the Lyfscience Quiz! </h2>
            <p className="text-black">Test your knowledge in life sciences and explore the wonders of biology. Good luck!</p>
          </div>

          <Button 
            className="lyfscience-button" 
            onClick={handleStartTest}
          >
            Start Test
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Lyfscience;
