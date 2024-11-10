// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="flex justify-between">
        <Link to="/" className="text-lg font-bold">Home</Link>
        <div>
          <Link to="/about" className="mr-4">About</Link>
          <Link to="/services" className="mr-4">Services</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
