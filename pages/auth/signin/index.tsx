import Link from "next/link";

import Input from "@/components/Input";
import { PrimaryButton } from "@/components/Buttons";

import useForm from "hooks/useForm";
import { loginInputs } from "utils/inputs";

import { Main } from "styles/auth";
import { FormEvent } from "react";
import Head from "next/head";
import { loginUser } from "@/firebase/auth";
import { useUser } from "context/firebase";

function Login() {
  const { inputs, onChange } = useForm(loginInputs);
  const user = useUser();
  console.log(user);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const values = {
      email: inputs.email.value,
      password: inputs.password.value,
    };
    loginUser(values).then((userCredential) => {
      if (!userCredential) return null;
    });
  };

  return (
    <div>
      <Head>
        <title>DL3arn | Sign in</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
