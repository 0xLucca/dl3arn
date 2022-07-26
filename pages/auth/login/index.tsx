import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

import { PrimaryButton } from "../../../components/Buttons";
import Input from "@/components/Input";
import { InputChange } from "@/types/";

const Container = styled.main`
  display: grid;
  place-items: center;
  height: 100vh;
  margin: 0 auto;

  .link {
    font-weight: 600;
    color: #5af;
  }
  > div {
    width: 481px;
  }

  .signup {
    margin: 1rem 0 0 0;
  }
`;
const Form = styled.form`
  gap: 1rem;

  &,
  .inputs {
    display: flex;
    flex-flow: column;
    width: 100%;
  }

  .inputs {
    gap: 0.5rem;
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
      <Container>
        <div>
          <Form>
            <h1>Login</h1>
            <div className="inputs">
              <Input
                placeholder="email"
                name="email"
                onChange={handleChange}
                value={inputs.email}
              />
              <Input
                placeholder="password"
                name="password"
                type="password"
                onChange={handleChange}
                value={inputs.password}
              />
            </div>
            <PrimaryButton>Next</PrimaryButton>
            <Link href="/reset">
              <a className="link">Forgot password?</a>
            </Link>
          </Form>
          <p className="signup">
            Don&apos;t have an account?{" "}
            <Link href="/auth/signup">
              <a className="link">Sign up</a>
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Login;
