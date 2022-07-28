import auth from "services/firebase/auth";

export const logout = () => auth.signOut();
