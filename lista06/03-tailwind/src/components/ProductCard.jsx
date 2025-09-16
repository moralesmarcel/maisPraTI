// src/components/ProductCard.jsx
import React from "react";

export default function ProductCard({ product, addToCart }) {
  const { name, price, rating, tag, image, variant } = product;

  // Mapear a variante para classes Tailwind
  const variantClasses = {
    solid: "bg-gray-500 text-white hover:bg-gray-700",
    outline: "border border-gray-600 text-gray-600 hover:bg-gray-300",
    ghost: "text-gray-600 hover:bg-gray-50",
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
      {/* Imagem */}
      <img src={image} alt={name} className="w-full h-48 object-cover" />

      <div className="p-4 flex flex-col flex-1">
        {/* Tag */}
        {tag && (
          <span className="text-xs font-semibold uppercase px-2 py-1 bg-yellow-300 dark:bg-yellow-500 text-gray-800 dark:text-gray-900 rounded-full inline-block mb-2">
            {tag}
          </span>
        )}

        {/* Nome */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {name}
        </h3>

        {/* Preço */}
        <p className="text-gray-700 dark:text-gray-200 font-bold mb-2">
          ${price.toFixed(2)}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`text-yellow-400 ${i >= rating ? "opacity-30" : ""}`}>
              ★
            </span>
          ))}
        </div>

        {/* Botão Adicionar */}
        <button
          className={`mt-auto px-4 py-2 rounded-lg font-semibold transition ${variantClasses[variant]}`}
          onClick={() => addToCart(product)}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}
