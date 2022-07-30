import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "services/firebase";
import { Login } from "utils/types/firebase";

export const login: Login = async ({ email, password }, provider = "email") => {
  const providers = {
    email: async () =>
      email && password
        ? await signInWithEmailAndPassword(auth, email, password)
        : null,
    google: async () => await signInWithPopup(auth, googleProvider),
  };

  const handler = providers[provider];
  const data = await handler();

  if (!data) return null;

  return data;
};
