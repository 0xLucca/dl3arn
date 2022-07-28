import Input from "components/Input";
import PrivateRoute from "components/PrivateRoute";
import { useAuth } from "context/firebase";
import { User } from "firebase/auth";
import useForm from "hooks/useForm";
import Image from "next/image";
import { FormEvent } from "react";
import { ProfileContainer } from "@/styles/profile.styles";
import { PrimaryButton } from "components/Buttons";

const defaults: Partial<User> = {};

const initial = {
  email: { value: "" },
  password: { value: "" },
  current_password: { value: "" },
  photoURL: { value: "" },
};
function Profile() {
  const {
    data: { user },
    logout,
    updateUser,
  } = useAuth();
  const { email, photoURL, displayName } = user ? user : defaults;

  const { inputs, onChange } = useForm(initial);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const values = {
      email: inputs.email.value,
      password: inputs.password.value,
      current_password: inputs.current_password.value,
      photoURL: inputs.photoURL.value,
    };
    updateUser(values);
  };

  return (
    <PrivateRoute>
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
            <Input
              onChange={onChange}
              name="image"
              value={inputs.photoURL.value}
              placeholder="Photo"
            />
          </div>
          <PrimaryButton className="btn">update</PrimaryButton>
        </form>

        <PrimaryButton onClick={logout}>Logout</PrimaryButton>
      </ProfileContainer>
    </PrivateRoute>
  );
}

export default Profile;
