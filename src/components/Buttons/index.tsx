import styled, { css } from "styled-components";
import Button from "./Button";

interface ButtonProps {
  isLight?: boolean;
}

export const PrimaryButton = styled(Button)`
  color: #fff;

  background-color: var(--primary);
  box-shadow: -48px -61px 52px -40px #ffd700 inset;

  border-radius: 9999px;

  transition: transform 0.15s;

  :hover {
    transform: scale(110%);
  }
`;

export const SecondaryButton = styled(Button)<ButtonProps>`
  background-color: transparent;

  border: 1px solid var(--dark);
  color: var(--dark);

  :hover {
    background-color: var(--primary);
    border: 1px solid var(--primary);
    color: #fff;
  }

  ${({ isLight }) =>
    isLight &&
    css`
      border: 1px solid var(--light);
      color: var(--light);
    `}
`;

export const SimpleButton = styled(Button)`
  text-decoration: underline;

  :hover {
    box-shadow: 0 0.25rem 0.5rem #0002;
  }
`;
