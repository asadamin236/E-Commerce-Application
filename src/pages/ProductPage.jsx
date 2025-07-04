import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold text-blue-700 mb-4">Product Details</h1>
      <div className="bg-white p-6 shadow rounded-md">
        <p className="text-gray-600 mb-2">Product ID: {id}</p>
        <p className="text-gray-700">Here you'll display full product details.</p>

        {/* Ask AI Button (UI Only) */}
        <div className="mt-6">
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Ask AI about this product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
