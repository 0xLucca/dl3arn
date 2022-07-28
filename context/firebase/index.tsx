import { User } from "firebase/auth";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import auth from "services/firebase/auth";
import { FirebaseContext, UserData } from "utils/types/firebase";
import { login } from "./login";
import { logout } from "./logout";
import { signUp } from "./signUp";
import { updateCredentials } from "./updateCredentials";
import { updateUser } from "./updateUser";

const initial = {
  auth: {
    data: {
      user: null,
      isLoading: true,
    },
    logout,
    signUp,
    login,
    updateCredentials,
    updateUser,
  },
};

const firebaseContext = createContext<FirebaseContext>(initial);

interface Props {
  children: ReactNode;
}
function Provider({ children }: Props) {
  const [data, setData] = useState<UserData>(initial.auth.data);

  useEffect(() => console.debug(data), [data]);

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user: User | null) => {
      setData({ user, isLoading: false });
    });
    return unsuscribe;
  }, []);

  const value: FirebaseContext = {
    auth: {
      data,
      login,
      logout,
      signUp,
      updateCredentials,
      updateUser,
    },
  };

  return (
    <firebaseContext.Provider value={value}>
      {!data.isLoading && children}
    </firebaseContext.Provider>
  );
}
export default Provider;

export function useFirebase() {
  return useContext(firebaseContext);
}
export function useAuth() {
  return useContext(firebaseContext).auth;
}
