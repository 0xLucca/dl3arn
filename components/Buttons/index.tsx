import styled from "styled-components";
import Button from "./BaseButton";

export const PrimaryButton = styled(Button)`
  background-color: #1e1e20;
  color: #fff;
  :hover {
    box-shadow: 0 0.25rem 0.5rem #0002;
  }
`;

export const SecondaryButton = styled(Button)`
  --color: #1e1e20;
  background-color: #fff;
  border: 1px solid var(--color);
  color: var(--color);
  :hover {
    box-shadow: 0 0.25rem 0.5rem #0002;
  }
`;

export const SimpleButton = styled(Button)`
  text-decoration: underline;
  :hover {
    box-shadow: 0 0.25rem 0.5rem #0002;
  }
`;
