import { useEffect, useState } from "react";
import TypedFetch from "utils/TypedFetch";
import { APIGetVideoById } from "utils/types/video";

interface Params {
  videoId: string | string[] | undefined;
}

function useVideo({ videoId }: Params) {
  const [video, setVideo] = useState<APIGetVideoById>(null);

  useEffect(() => {
    const p = async () => {
      if (!videoId || typeof videoId !== "string") return setVideo(null);
      const video = await TypedFetch<APIGetVideoById>(`/api/videos/${videoId}`);
      setVideo(video);
    };
    p();
  }, [videoId]);

  return { video };
}

export default useVideo;
