import {
  getAuth,
  createUserWithEmailAndPassword,
  UserCredential,
  onAuthStateChanged,
  NextOrObserver,
  User,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { LoginUser, RegisterUser } from "@/types/firebase";
import { app } from "@/firebase";

const auth = getAuth(app);

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
