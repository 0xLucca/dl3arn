import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import { auth, googleProvider } from "services/firebase";

import { Login } from "utils/types/firebase";

export const login: Login = async ({ email, password }, provider = "email") => {
  if (provider === "google") return signInWithPopup(auth, googleProvider);
  if (!email || !password) return null;
  return signInWithEmailAndPassword(auth, email, password);
};
