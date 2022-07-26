import { HTMLProps } from "react";
import styled from "styled-components";

const Label = styled.label`
  input {
    padding: 0.5rem 0.5rem;
  }
`;

interface Props extends Omit<HTMLProps<HTMLInputElement>, "label"> {
  label?: React.ReactNode;
}
function Input({ className, label, ...input }: Props) {
  return (
    <Label className={className}>
      {label && <span>{label}</span>}
      <input {...input} />
    </Label>
  );
}

export default Input;
