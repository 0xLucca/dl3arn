import { auth } from "services/firebase";
import { setCookie } from "cookies-next";

async function TypedFetch<T>(
  path: RequestInfo | URL,
  options?: RequestInit
): Promise<T> {
  const token = await auth.currentUser?.getIdToken();
  if (token) setCookie("token", token);
  return fetch(path, options)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      if (result.message) throw new Error(result.message);
      return result;
    });
}

export default TypedFetch;
