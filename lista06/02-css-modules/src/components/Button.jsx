// src/components/Button.jsx
import React from "react";
import styles from "./Button.module.css";

/**
 * Props:
 * - variant: "solid" | "outline" | "ghost"
 * - onClick, disabled, children
 */

export default function Button({ variant = "solid", onClick, disabled = false, children, ...rest }) {
  // Normaliza variant
  const v = variant === "outline" ? "btnOutline" : variant === "ghost" ? "btnGhost" : "btnSolid";

  // monta className do CSS Module
  const className = `${styles.btn} ${styles[v]} ${disabled ? styles.disabled || "" : ""}`.trim();

  return (
    <button
      type="button"
      className={className}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-pressed="false"
      {...rest}
    >
      {children}
    </button>
  );
}
