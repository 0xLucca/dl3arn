import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
const BaseButton = styled.button`
  border: none;
  background-color: transparent;
  width: 100%;
  padding: 0.75rem;
  font-weight: 600;
  box-shadow: 0 0.25rem 0.5rem #0000;
  transition: all 0.15s;
  border-radius: 0.25rem;
`;
function Button({ children, ...other }: ButtonProps) {
  return <BaseButton {...other}>{children}</BaseButton>;
}

export default Button;
