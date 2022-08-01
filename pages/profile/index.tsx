import Input from "components/Input";
import PrivateRoute from "components/PrivateRoute";
import { useAuth } from "context/firebase";
import { User } from "firebase/auth";
import useForm from "hooks/useForm";
import Image from "next/image";
import { FormEvent } from "react";
import { ProfileContainer } from "@/styles/profile.styles";
import { PrimaryButton } from "components/Buttons";
import Head from "next/head";
import { GetServerSideProps } from "next";
import privateRoute from "utils/privateRoute";

const defaults: Partial<User> = {};

const initial = {
  email: { value: "" },
  password: { value: "" },
  current_password: { value: "" },
};
function Profile() {
  const {
    data: { user },
    logout,
    updateCredentials,
  } = useAuth();
  const { email, photoURL, displayName } = user ? user : defaults;

  const { inputs, onChange } = useForm(initial);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { current_password } = inputs;
    const values = {
      email: inputs.email.value,
      password: inputs.password.value,
    };
    updateCredentials(current_password.value, values);
  };

  return (
    <PrivateRoute>
      <Head>
        <title>DL3arn | Dashboard</title>
      </Head>

      <ProfileContainer>
        <div className="info">
          {photoURL && (
            <div className="img-container">
              <Image layout="fill" src={photoURL} alt="" />
            </div>
          )}

          <div className="names">
            {displayName && <h2 className="name">{displayName}</h2>}
            <p className="email">{email}</p>
          </div>
        </div>
        <form className="credentials" onSubmit={onSubmit}>
          <div className="inputs">
            <Input
              onChange={onChange}
              name="email"
              value={inputs.email.value}
              placeholder="email"
            />
            <Input
              onChange={onChange}
              name="password"
              value={inputs.password.value}
              placeholder="password"
            />
            <Input
              onChange={onChange}
              name="current_password"
              value={inputs.current_password.value}
              placeholder="current password"
            />
          </div>
          <PrimaryButton className="btn">update</PrimaryButton>
        </form>

        <PrimaryButton onClick={logout}>Logout</PrimaryButton>
      </ProfileContainer>
    </PrivateRoute>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isUnauthenticated = await privateRoute(context);
  if (isUnauthenticated) return isUnauthenticated;
  return { props: {} };
};
export default Profile;
