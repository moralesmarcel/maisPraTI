import styled, { css } from "styled-components";

const variants = {
  solid: css`
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.onPrimary};
    border: none;

    &:hover {
      background-color: ${({ theme }) => theme.primaryDark};
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${({ theme }) => theme.primary};
    border: 2px solid ${({ theme }) => theme.primary};

    &:hover {
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.onPrimary};
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${({ theme }) => theme.primary};
    border: none;

    &:hover {
      background-color: ${({ theme }) => theme.primaryLight};
    }
  `,
};

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
  ${({ variant }) => variants[variant || "solid"]}
`;

export default Button;
