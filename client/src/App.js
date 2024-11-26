import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './components/Auth';
import CarList from './components/CarList';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleSetToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Car Management</h1>
          {token && (
            <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">
              Logout
            </button>
          )}
        </nav>
        <Routes>
          <Route path="/" element={token ? <Navigate to="/cars" /> : <Auth setToken={handleSetToken} />} />
          <Route path="/cars" element={token ? <CarList token={token} /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;