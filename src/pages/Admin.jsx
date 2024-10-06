import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import './MissileDashboard.css'

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:4080/admin/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleStartTest = () => {
    navigate('/Home', { replace: true });
  };

  if (loading) {
    return <p className="text-center mt-4">Loading user data...</p>;
  }

  if (error) {
    return <p className="text-center mt-4 text-red-500">Error: {error}</p>;
  }

  return (
    <div className="min-h-screen w-screen flex flex-col items-center bg-gray-100 p-8">
      <div className="p-8 bg-white rounded-lg shadow-lg w-full max-w-4xl">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">User Dashboard</h1>

        {/* User Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200 border-b">
                <th className="py-3 px-4 text-left text-gray-600 font-semibold">Name</th>
                <th className="py-3 px-4 text-left text-gray-600 font-semibold">Score</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-4 text-gray-700">{user.username}</td>
                  <td className="py-3 px-4 text-gray-700">{user.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <Button
            className="w-40 text-white bg-blue-600 hover:bg-blue-700 rounded-lg py-2 px-4"
            onClick={handleStartTest}
          >
            HOME
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
