import styled, { css } from "styled-components";
import Button from "./Button";

interface ButtonProps {
  isDark?: boolean;
}

export const PrimaryButton = styled(Button)`
  background-color: var(--primary);
  color: #fff;

  :hover {
    background-color: var(--dark-primary);
  }
`;

export const SecondaryButton = styled(Button)<ButtonProps>`
  background-color: transparent;

  border: 1px solid var(--light);
  color: var(--light);

  :hover {
    background-color: var(--primary);
    border: 1px solid var(--primary);
    color: #fff;
  }

  ${({ isDark }) =>
    isDark &&
    css`
      border: 1px solid var(--dark);
      color: var(--dark);
    `}
`;

export const SimpleButton = styled(Button)`
  text-decoration: underline;

  :hover {
    box-shadow: 0 0.25rem 0.5rem #0002;
  }
`;
