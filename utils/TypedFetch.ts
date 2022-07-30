async function TypedFetch<T>(
  path: RequestInfo | URL,
  options?: RequestInit
): Promise<T> {
  return fetch(path, options).then((res) => res.json());
}

export default TypedFetch;
