import { auth } from "services/firebase";
import { setCookie } from "cookies-next";
import { APIResponse } from "./types/api";

async function TypedFetch<T>(
  path: RequestInfo | URL,
  options?: RequestInit
): Promise<APIResponse<T>> {
  const token = await auth.currentUser?.getIdToken();
  if (token) setCookie("token", token, { sameSite: true });
  return fetch(path, options).then((res) => res.json());
}

export default TypedFetch;
