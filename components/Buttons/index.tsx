import styled from "styled-components";
import Button from "./Button";

export const PrimaryButton = styled(Button)`
  background-color: var(--primary);
  color: #fff;

  :hover {
    background-color: var(--dark-primary);
  }
`;

export const SecondaryButton = styled(Button)`
  --color: #1e1e20;

  background-color: #fff;
  border: 1px solid var(--color);
  color: var(--color);

  :hover {
    background-color: #fafafa;
  }
`;

export const SimpleButton = styled(Button)`
  text-decoration: underline;

  :hover {
    box-shadow: 0 0.25rem 0.5rem #0002;
  }
`;
