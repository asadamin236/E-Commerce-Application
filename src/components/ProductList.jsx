import React, { useEffect, useState } from "react";

const ProductList = ({ filter = "", onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          filter.trim()
            ? "https://e-commerce-application-backend-3qqr.vercel.app/api/ai/recommend"
            : "https://e-commerce-application-backend-3qqr.vercel.app/api/products",
          {
            method: filter.trim() ? "POST" : "GET",
            headers: { "Content-Type": "application/json" },
            body: filter.trim() ? JSON.stringify({ text: filter }) : null,
          }
        );

        const data = await res.json();
        const items = filter.trim() ? data.recommended : data;

        setProducts(items);
      } catch (err) {
        console.error("Failed to fetch products", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filter]);

  if (loading) {
    return <p className="text-center text-blue-500">🔄 Loading products...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{product.title}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-blue-600 font-bold mt-2">${product.price}</p>
            <button
              className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No products found.
        </p>
      )}
    </div>
  );
};

export default ProductList;
