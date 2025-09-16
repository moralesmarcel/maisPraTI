import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Skeleton from "./components/Skeleton";
import Footer from "./components/Footer";
import productsData from "./data/products";
import styles from "./App.module.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) setDarkMode(theme === "dark");
    setTimeout(() => setLoading(false), 1500);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleAddToCart = () => setCartCount((c) => c + 1);

  return (
    <div className={styles.app}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} cartCount={cartCount} />

      <main className={styles.productGrid}>
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
          : productsData.map((p) => (
              <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
            ))}
      </main>

      <Footer />
    </div>
  );
}
