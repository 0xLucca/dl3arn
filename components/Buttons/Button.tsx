import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

const BaseButton = styled.button`
  display: block;

  width: 100%;
  padding: 0.75rem 1.25rem;

  border: none;
  border-radius: 0.25rem;
  background-color: transparent;
  box-shadow: 0 0.25rem 0.5rem #0000;

  letter-spacing: 0.5px;
  font-weight: 600;
  font-size: inherit;

  transition: all 0.15s;
`;
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, ...other }: ButtonProps) {
  return <BaseButton {...other}>{children}</BaseButton>;
}

export default Button;
