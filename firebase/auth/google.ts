import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = (auth: Auth) => {
  return signInWithPopup(auth, googleProvider);
};

export default googleProvider;
