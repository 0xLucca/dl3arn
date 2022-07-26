import Link from "next/link";
import { useState } from "react";

import Input from "@/components/Input";
import { PrimaryButton } from "@/components/Buttons";
import { Container, Form } from "@/components/Login";

import { InputChange } from "@/types/";

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
