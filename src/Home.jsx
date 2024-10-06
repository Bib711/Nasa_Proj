import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert } from '@/components/ui/alert';
import { Card } from '@/components/ui/card';
import axios from 'axios';
import './index.css';
import './App.css';

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [userType, setUserType] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4050/auth', {
        username,
        password
      });

      if (response.data.type) {
        setUserType(response.data.type);
        // Redirect to dashboard based on user type
        console.log(response.data)
        window.location.href = `/${response.data.type}`;
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-login flex items-center justify-center min-h-screen">
      <div className="inner max-w-md md:max-w-lg lg:max-w-2xl">
        <Card className="w-full max-w-md p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-black text-center">
            Recruitment and Assessment Centre
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 rounded bg-black bg-opacity-50 text-white"
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded bg-black bg-opacity-50 text-white"
              required
            />

            {error && (
              <Alert variant="negative" className="my-4">
                {error}
              </Alert>
            )}

            <Button type="submit" className="w-full p-3 rounded bg-blue-600 text-white hover:bg-blue-700">
              Login
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Home;
