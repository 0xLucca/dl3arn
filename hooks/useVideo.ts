import { useEffect, useState } from "react";
import TypedFetch from "utils/TypedFetch";
import { ContractModel } from "utils/types/firebase";
import { APIGetVideoById } from "utils/types/video";

interface Params {
  videoId: string;
  locked: boolean;
}

interface Data {
  error: { message: string } | null;
  isLoading: boolean;
  video: APIGetVideoById;
}

const empty: Data = {
  error: null,
  isLoading: false,
  video: null,
};
const initial: Data = {
  error: null,
  isLoading: true,
  video: null,
};
function useVideo({ videoId, locked }: Params) {
  const [data, setData] = useState<Data>(initial);

  useEffect(() => {
    if (!videoId) return setData(empty);

    // si el usuario no tienen el NFT no hace nada
    if (locked) return setData(empty);

    setData(initial);
    TypedFetch<APIGetVideoById>(`/api/videos/${videoId}`)
      .then(({ data: video, error }) => {
        if (error) throw error;
        setData({ ...empty, video });
      })
      .catch((error) => error && setData({ ...empty, error }));
  }, [videoId, locked]);

  return data;
}

export default useVideo;
