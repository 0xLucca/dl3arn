import {
  getAuth,
  createUserWithEmailAndPassword,
  UserCredential,
  onAuthStateChanged,
  NextOrObserver,
  User,
  signInWithEmailAndPassword,
  UserInfo,
  updateProfile,
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";

import { LoginUser, RegisterUser } from "@/types/firebase";
import { app } from "@/firebase";

export const auth = getAuth(app);

export const authListener = (cb: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, cb);
};

type Register = (_: RegisterUser) => Promise<UserCredential | null>;
export const registerUser: Register = async ({ email, password, validate }) => {
  if (password !== validate) return null;
  return await createUserWithEmailAndPassword(auth, email, password);
};

type Login = (_: LoginUser) => Promise<UserCredential | null>;
export const loginUser: Login = async ({ email, password }) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => auth.signOut();

type UpdateProps = Partial<User & { password: string }> & {
  current_password: string;
};
export const updateUser = async ({
  email,
  current_password,
  password,
  ...others
}: UpdateProps) => {
  if (!auth.currentUser || !auth.currentUser.email) return null;
  const promises = [];

  await updateProfile(auth.currentUser, others);

  if (email || password) {
    const credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      current_password
    );
    await reauthenticateWithCredential(auth.currentUser, credential);
    if (email) promises.push(updateEmail(auth.currentUser, email));
    if (password) promises.push(updatePassword(auth.currentUser, password));

    await Promise.all(promises);
    logout();
  }
};
