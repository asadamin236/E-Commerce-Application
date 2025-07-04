import React, { useState } from "react";
import ProductList from "../components/ProductList";
import VoiceSearch from "../components/VoiceSearch";

const Home = ({ onAddToCart }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleVoiceSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const sendVoiceToServer = async (transcript) => {
    try {
      const response = await fetch("https://e-commerce-application-backend-3qqr.vercel.app/api/ai/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: transcript }),
      });

      const data = await response.json();

      if (data.tags && data.tags.length > 0) {
        setSearchQuery(data.tags.join(" "));
      }
    } catch (err) {
      console.error("Voice API Error:", err);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-4 text-center">
        Welcome to AIShop
      </h1>
      <p className="text-gray-600 text-center mb-6">
        Shop smart with voice search and AI recommendations.
      </p>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search products..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <VoiceSearch
        onSearch={handleVoiceSearch}
        sendToServer={sendVoiceToServer}
      />

      <ProductList onAddToCart={onAddToCart} filter={searchQuery} />
    </section>
  );
};

export default Home;

