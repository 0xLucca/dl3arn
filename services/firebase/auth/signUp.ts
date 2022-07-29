import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import { auth } from "services/firebase";

import { EmailRegister } from "utils/types/firebase";

export const signUp: EmailRegister = async ({ email, password }) => {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  if (!auth.currentUser) return null;
  sendEmailVerification(auth.currentUser);
  return user;
};
