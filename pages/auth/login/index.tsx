import Link from "next/link";

import Input from "@/components/Input";
import { PrimaryButton } from "@/components/Buttons";

import useForm from "hooks/useForm";
import { loginInputs } from "utils/inputs";

import { Main } from "styles/auth";
import { FormEvent, useEffect } from "react";
import Head from "next/head";
import { useAuth } from "context/firebase";
import Router from "next/router";

function Login() {
  const { inputs, onChange } = useForm(loginInputs);
  const {
    data: { user, isLoading },
    login,
  } = useAuth();
  useEffect(() => {
    if (!isLoading && user) Router.back();
  }, [isLoading, user]);
  if (isLoading || user) return null;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const values = {
      email: inputs.email.value,
      password: inputs.password.value,
    };
    login!(values, "email");
  };

  const loginWithGoogle = () => {
    login!({}, "google");
  };

  return (
    <div>
      <Head>
        <title>DL3arn | Sign in</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <div>
          <h1>Sign in</h1>
          <button onClick={loginWithGoogle}>Google</button>
          <form onSubmit={onSubmit} className="form">
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
