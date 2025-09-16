import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar({ darkMode, setDarkMode, cartCount }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MiniLoja com CSS Modules</div>
      <div className={styles.actions}>
        <button onClick={() => setDarkMode((d) => !d)} aria-label="Alternar tema">
          {darkMode ? "🌙" : "☀️"}
        </button>
        <div className={styles.cart} aria-label="Carrinho de compras">
          🛒
          {cartCount > 0 && (
            <span className={styles.cartBadge} role="status" aria-live="polite">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
