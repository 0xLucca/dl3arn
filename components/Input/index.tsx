import { InputProps } from "@/types/";
import styled from "styled-components";

const Label = styled.label`
  width: 100%;
  input {
    width: 100%;
    padding: 0.5rem 0.5rem;
  }
`;

function Input({ className, label, ...input }: InputProps) {
  return (
    <Label className={className}>
      {label && <span>{label}</span>}
      <input autoComplete="off" {...input} />
    </Label>
  );
}

export default Input;
