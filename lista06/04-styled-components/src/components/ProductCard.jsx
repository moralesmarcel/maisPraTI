import React from "react";
import styled from "styled-components";
import Button from "./Button"; // Usar o componente unificado de botões

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: contain; /* mostra a imagem inteira sem cortar */
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1rem;
  margin: 0 0 0.5rem 0;
`;

const Price = styled.span`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Rating = styled.div`
  margin-bottom: 0.5rem;
  color: #facc15; /* amarelo para as estrelas */
`;

const Tag = styled.span`
  background-color: #ef4444;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
  display: inline-block;
`;

export default function ProductCard({ product, addToCart }) {
  const { title, price, rating, tag, image, buttonVariant } = product;

  return (
    <Card>
      <Image src={image} alt={title} />
      {tag && <Tag>{tag}</Tag>}
      <Title>{title}</Title>
      <Price>${price.toFixed(2)}</Price>
      <Rating>
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </Rating>
      <Button variant={buttonVariant} onClick={() => addToCart(product)}>
        Adicionar
      </Button>
    </Card>
  );
}
