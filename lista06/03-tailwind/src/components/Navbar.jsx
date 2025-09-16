import React from "react";

export default function Navbar({ darkMode, setDarkMode, cartCount }) {
  const toggle = () => setDarkMode(d => !d);

  return (
    <nav className="navbar">
      <div className="font-bold text-lg">MiniLoja (com Tailwind CSS</div>
      <div className="flex items-center gap-4">
        <button onClick={toggle} aria-label="Alternar tema" className="p-2 rounded border border-gray-300 dark:border-gray-600">
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
        <div className="relative text-2xl" aria-label="Carrinho de compras">
          🛒
          {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">{cartCount}</span>}
        </div>
      </div>
    </nav>
  );
}
