import React from "react"
import styled from "styled-components"
import { FaMoon, FaSun, FaShoppingCart } from "react-icons/fa"

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.cardBg};
  border-bottom: 1px solid ${({ theme }) => theme.cardBorder};
  position: sticky;
  top: 0;
  z-index: 100;
`

const Logo = styled.h1`
  font-size: 1.5rem;
`

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

const IconButton = styled.button`
  background: none;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text};
  position: relative;
`

const Badge = styled.span`
  position: absolute;
  top: -6px;
  right: -8px;
  background: red;
  color: white;
  font-size: 0.7rem;
  border-radius: 50%;
  padding: 2px 6px;
`

export default function Navbar({ toggleTheme, theme, cartCount }) {
  return (
    <Nav>
      <Logo>MiniLoja com Styled Components</Logo>
      <Actions>
        <IconButton onClick={toggleTheme}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </IconButton>
        <IconButton>
          <FaShoppingCart />
          {cartCount > 0 && <Badge>{cartCount}</Badge>}
        </IconButton>
      </Actions>
    </Nav>
  )
}
