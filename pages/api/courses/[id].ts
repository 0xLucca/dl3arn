import { NextApiRequest, NextApiResponse } from "next";
import { store } from "services/firebase/admin";
import Course, { Video } from "utils/types/Course";

type Handler = (req: NextApiRequest, res: NextApiResponse) => Promise<any>;

const handler: Handler = async (req, res) => {
  const { id } = req.query;
  if (typeof id !== "string") return res.status(404).json(null);

  const ref = await store.collection("courses").doc(id).get();

  const course = { uid: ref.id, ...ref.data() } as Course;

  course.videos = await Promise.all(
    course.videos.map(async (video) => {
      if (typeof video !== "string") return null;
      const video_ref = await store.collection("videos").doc(video).get();
      const video_data = video_ref.data() as Video;

      const new_video = {
        uid: video_ref.id,
        name: video_data.name,
        duration: video_data.duration,
        free: video_data.free,
      } as Video;

      return new_video;
    })
  );

  res.status(200).json(course);
};

export default handler;
