import { authListener } from "@/firebase/auth";
import { User } from "firebase/auth";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface Context {
  user: { user: User | null; isLoading: boolean };
}
const firebaseContext = createContext<Context>({
  user: { user: null, isLoading: true },
});

interface Props {
  children: ReactNode;
}
function Provider({ children }: Props) {
  const [user, setUser] = useState<{ user: User | null; isLoading: boolean }>({
    user: null,
    isLoading: true,
  });

  useEffect(() => console.debug(user.user), [user]);

  useEffect(() => {
    setUser({ user: null, isLoading: true });
    authListener((user: User | null) => {
      if (user) return setUser({ user, isLoading: false });
      return setUser({ user: null, isLoading: false });
    });
  }, []);

  return (
    <firebaseContext.Provider value={{ user }}>
      {!user.isLoading ? children : null}
    </firebaseContext.Provider>
  );
}
export default Provider;

export function useFirebase() {
  return useContext(firebaseContext);
}
export function useUser() {
  const { user } = useContext(firebaseContext);
  return user;
}
