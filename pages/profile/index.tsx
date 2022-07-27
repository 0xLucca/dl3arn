import Input from "components/Input";
import PrivateRoute from "components/PrivateRoute";
import { useUser } from "context/firebase";
import { updateUser } from "@/firebase/auth";
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
  const { user, isLoading } = useUser();
  const { email, photoURL } = user ? user : defaults;

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

        <h2>{email}</h2>
        {photoURL && (
          <div style={{ width: "10rem", height: "10rem" }}>
            <Image
              width={1920}
              height={1080}
              objectFit="cover"
              objectPosition="center"
              layout="responsive"
              src={photoURL}
              alt=""
            />
          </div>
        )}
      </ProfileContainer>
    </PrivateRoute>
  );
}

export default Profile;
