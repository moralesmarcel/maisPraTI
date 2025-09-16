import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Temas para dark mode
const lightTheme = {
  body: "#f5f5f5",
  text: "#222",
  card: "#fff",
  cardBg: "#fff",
  cardBorder: "#ddd",
  button: "#ff0000",
};

const darkTheme = {
  body: "#1a1a1a",
  text: "#f5f5f5",
  card: "#2c2c2c",
  cardBg: "#2c2c2c",
  cardBorder: "#444",
  button: "#717171",
};

// Estilos globais
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Roboto", sans-serif;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`;

// Container responsivo para grid de produtos
const Container = styled.div`
  padding: 2rem;
  display: grid;
  grid-gap: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Navbar
        toggleTheme={() => setDarkMode(!darkMode)}
        theme={darkMode ? "dark" : "light"}
        cartCount={cart.length}
      />

      <Container>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </Container>

      <Footer />
    </ThemeProvider>
  );
}
