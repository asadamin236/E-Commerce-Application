import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-gray-600 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} AIShop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
