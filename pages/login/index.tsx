import { useState } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../../components/Buttons";
import Input from "../../components/Input";
import { InputChange } from "../../utils/types";

const Form = styled.form`
  max-width: 481px;
  margin: 0 auto;

  .inputs {
    display: flex;
    flex-flow: column;
    gap: 1rem;
    label,
    input {
      width: 100%;
    }
  }
`;
function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = ({ target: { name, value } }: InputChange) => {
    setInputs((old) => ({ ...old, [name]: value }));
  };

  return (
    <div>
      <main>
        <Form>
          <div className="inputs">
            <Input name="email" onChange={handleChange} value={inputs.email} />
            <Input
              name="password"
              onChange={handleChange}
              value={inputs.password}
            />
          </div>
          <PrimaryButton>asdf</PrimaryButton>
        </Form>
      </main>
    </div>
  );
}

export default Login;
