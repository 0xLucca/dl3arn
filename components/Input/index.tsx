import { HTMLProps } from "react";
import styled from "styled-components";

const Label = styled.label`
  border-radius: 5px;
`;

interface Props extends HTMLProps<HTMLInputElement> {}
function Input({ className, ...input }: Props) {
  return (
    <Label className={className}>
      <input {...input} />
    </Label>
  );
}

export default Input;
