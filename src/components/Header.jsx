import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-blue-600">
          AIShop
        </a>
        <nav className="space-x-4">
          <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="/cart" className="text-gray-700 hover:text-blue-600">Cart</a>
          <a href="/login" className="text-gray-700 hover:text-blue-600">Login</a>
          <a href="/register" className="text-gray-700 hover:text-blue-600">Register</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
