import { useEffect, useState } from "react";
import getVideo from "services/firebase/store/getVideo";
import { Video } from "utils/types/Course";

interface Params {
  videoId: string | string[] | undefined;
}

function useVideo({ videoId }: Params) {
  const [video, setVideo] = useState<Video | null>(null);

  useEffect(() => {
    const p = async () => {
      if (typeof videoId !== "string") return null;
      const res = await getVideo(videoId);
      setVideo(res);
    };
    p();
  }, [videoId]);

  return { video };
}

export default useVideo;
