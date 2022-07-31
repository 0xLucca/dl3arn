import { useEffect, useState } from "react";
import TypedFetch from "utils/TypedFetch";
import { APIGetVideoById } from "utils/types/video";

interface Params {
  videoId: string | string[] | undefined;
}

function useVideo({ videoId }: Params) {
  const [video, setVideo] = useState<APIGetVideoById>(null);
  const [error, setError] = useState<{ message: string } | null>(null);

  useEffect(() => {
    const p = async () => {
      if (!videoId || typeof videoId !== "string") {
        setError(null);
        return setVideo(null);
      }
      try {
        const video = await TypedFetch<APIGetVideoById>(
          `/api/videos/${videoId}`
        );
        setVideo(video);
        setError(null);
      } catch (e: any) {
        console.log(e);
        setError({ message: e.message });
      }
    };
    p();
  }, [videoId]);

  return { video, error };
}

export default useVideo;
