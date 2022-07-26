import Link from "next/link";

import { PrimaryButton } from "@/components/Buttons";
import Input from "@/components/Input";

import useForm from "hooks/useForm";
import { registerInputs } from "utils/inputs";
import { Main } from "styles/auth";
import { FormEvent } from "react";

function Signup() {
  const { inputs, onChange } = useForm(registerInputs);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
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
            <Link href="/auth/login">
              <a className="link">Sign in</a>
            </Link>
          </p>
        </div>
      </Main>
    </div>
  );
}

export default Signup;
