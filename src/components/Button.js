// src/components/Button.js
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme, color }) => theme.colors[color] || theme.colors.primary};
  color: white;
  border: none;
  padding: 0.5em 1em;
  border-radius: 5px;
  font-size: ${({ theme, size }) => theme.fontSizes[size] || theme.fontSizes.medium};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, color }) => theme.colors.secondary};
  }
`;

export default Button;
