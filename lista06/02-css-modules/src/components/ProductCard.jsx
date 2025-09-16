import React, { useState } from "react";
import styles from "./ProductCard.module.css";
import Button from "./Button";

export default function ProductCard({ product, onAddToCart }) {
  const [loaded, setLoaded] = useState(false);

  const stars = "★".repeat(Math.round(product.rating));

  return (
    <div className={styles.card} tabIndex={0}>
      <div className={styles.cardImage}>
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className={loaded ? styles.loaded : ""}
          onLoad={() => setLoaded(true)}
        />
        {product.tag && <span className={styles.tag}>{product.tag}</span>}
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{product.title}</h3>
        <div className={styles.cardMeta}>
          <span className={styles.rating}>{stars}</span>
          <span>${product.price.toFixed(2)}</span>
        </div>
        <div className={styles.actions}>
          {/* 👇 aqui está a mudança */}
          <Button variant={product.variant} onClick={onAddToCart}>
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
}
