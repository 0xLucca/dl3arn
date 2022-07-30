import { doc, getDoc } from "firebase/firestore";
import { GetCourse } from "utils/types/Course";
import { coursesCollection, videosCollection } from "./collections";

async function getCourse(id: string): Promise<Partial<GetCourse> | null> {
  const res = await getDoc(doc(coursesCollection, id));
  const data = res.data();

  if (!res || !data) return null;

  const videos = (
    await Promise.all(
      data.videos.map(async (videoId) => {
        if (typeof videoId !== "string") return null;
        const res = await getDoc(doc(videosCollection, videoId));
        const data = res.data();
        if (!res || !data || typeof data === "string") return null;
        return { uid: res.id, ...data };
      })
    )
  ).filter((video) => !!video && typeof video !== "string");

  console.log([null, ...videos].filter((video) => !!video));

  return {
    uid: res.id,
    ...res.data(),
    videos: videos,
  };
}

export default getCourse;
