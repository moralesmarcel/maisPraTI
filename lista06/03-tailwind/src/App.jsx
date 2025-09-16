import React, { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import { products as initialProducts } from "./data/products";
import { FaShoppingCart, FaMoon, FaSun } from "react-icons/fa";

export default function App() {
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Persist dark mode no localStorage
  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setDarkMode(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10 flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">MiniLoja (com Tailwind CSS)</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <div className="relative">
            <FaShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </nav>

      {/* Grid de produtos */}
      <main className="p-4 grid gap-4 
                        grid-cols-1 
                        sm:grid-cols-2 
                        md:grid-cols-3 
                        lg:grid-cols-4">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} addToCart={addToCart} />
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 text-center p-4 mt-8">
        © 2025{" "}
        <a
          href="https://github.com/moralesmarcel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 dark:text-red-400 hover:underline"
        >
          Marcel Morales
        </a>
      </footer>
    </div>
  );
}
