import React from "react"
import styled from "styled-components"

const Foot = styled.footer`
  padding: 1rem;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.cardBorder};
  background-color: ${({ theme }) => theme.cardBg};
  margin-top: 2rem;
`

const Link = styled.a`
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export default function Footer() {
  return (
    <Foot>
      © 2025 <Link href="https://github.com/moralesmarcel" target="_blank" rel="noopener noreferrer">Marcel Morales</Link>
    </Foot>
  )
}
