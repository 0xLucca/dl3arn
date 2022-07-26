import Link from "next/link";

import Input from "@/components/Input";
import { PrimaryButton } from "@/components/Buttons";

import useForm from "hooks/useForm";
import { loginInputs } from "utils/inputs";

import { Main } from "styles/auth";
import { FormEvent } from "react";

function Login() {
  const { inputs, onChange } = useForm(loginInputs);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
      <Main>
        <div>
          <form onSubmit={onSubmit} className="form">
            <h1>Sign in</h1>
            <div className="inputs">
              {Object.entries(inputs).map(([name, data]) => (
                <Input
                  key={name}
                  name={name}
                  value={data.value}
                  onChange={onChange}
                  {...data.inputProps}
                />
              ))}
            </div>
            <PrimaryButton>Next</PrimaryButton>
            <Link href="/auth/reset">
              <a className="link">Forgot password?</a>
            </Link>
          </form>

          <p className="signup">
            Don&apos;t have an account?{" "}
            <Link href="/auth/signup">
              <a className="link">Sign up</a>
            </Link>
          </p>
        </div>
      </Main>
    </div>
  );
}

export default Login;
