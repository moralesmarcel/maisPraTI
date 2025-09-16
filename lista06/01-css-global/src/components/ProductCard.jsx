import React, { useState } from "react";
import Button from "./Button";

export default function ProductCard({ product, onAdd }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="product-card">
      <div className="card-image">
        <img
          src={product.image}
          alt={product.name}
          className={`product-image ${loaded ? "loaded" : ""}`}
          onLoad={() => setLoaded(true)}
        />
        {product.tag && <span className="tag">{product.tag}</span>}
      </div>

      {/* Nome do produto */}
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-meta">${product.price.toFixed(2)}</p>
        <div className="rating">{Array(product.rating).fill("★")}</div>
        <Button variant={product.variant} onClick={() => onAdd(product)}>
          Adicionar
        </Button>
      </div>
    </div>
  );
}
