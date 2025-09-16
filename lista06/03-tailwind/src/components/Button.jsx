// src/components/Button.jsx
import React from "react";
import clsx from "clsx";

export default function Button({ children, variant = "solid", onClick }) {
  const baseStyles = "px-4 py-2 rounded font-medium transition-colors duration-200";

  const variantStyles = {
    solid: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    ghost: "bg-transparent text-blue-600 hover:bg-blue-50",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyles, variantStyles[variant])}
    >
      {children}
    </button>
  );
}
