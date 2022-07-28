import { FormEvent, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import { registerUser } from "@/firebase/auth";

import { PrimaryButton } from "@/components/Buttons";
import Input from "@/components/Input";

import useForm from "@/hooks/useForm";
import { registerInputs } from "@/utils/inputs";
import { Main } from "@/styles/auth";
import { useUser } from "context/firebase";
import Router from "next/router";

function Signup() {
  const { inputs, onChange } = useForm(registerInputs);
  const { user, isLoading } = useUser();
  useEffect(() => {
    if (!isLoading && user && user.emailVerified) Router.push("/");
  }, [isLoading, user]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const values = {
      email: inputs.email.value,
      password: inputs.password.value,
      validate: inputs.validate.value,
    };

    registerUser(values).then((userCredential) => {
      if (!userCredential) return null;
    });
  };

  return (
    <div>
      <Head>
        <title>DL3arn | Sign up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <div>
          <form onSubmit={onSubmit} className="form">
            <h1>Sign up</h1>
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
          </form>
          <p className="signup">
            Already have an account?{" "}
            <Link href="/auth/signin">
              <a className="link">Sign in</a>
            </Link>
          </p>
        </div>
      </Main>
    </div>
  );
}

export default Signup;
