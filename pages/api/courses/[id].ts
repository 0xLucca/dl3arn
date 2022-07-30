import { NextApiRequest, NextApiResponse } from "next";
import { store } from "services/firebase/admin";
import { APIGetCourseById } from "utils/types/course";
import { CourseModel, VideoModel } from "utils/types/firebase";
import { VideoSafeProps } from "utils/types/video";

type Handler = (
  req: NextApiRequest,
  res: NextApiResponse<APIGetCourseById | null>
) => Promise<any>;

const handler: Handler = async (req, res) => {
  const { id } = req.query;
  if (typeof id !== "string") return res.status(404).json(null);

  const ref = await store.collection("courses").doc(id).get();
  const course = { id: ref.id, ...ref.data() } as CourseModel;

  const parsed_course: APIGetCourseById = {
    ...course,
    videos: await getVideos(course.videos),
  };

  res.status(200).json(parsed_course);
};

export default handler;

async function getVideos(videos: string[]) {
  return await Promise.all(
    videos.map(async (video) => {
      if (typeof video !== "string") return null;
      const video_ref = await store.collection("videos").doc(video).get();
      const video_data = video_ref.data() as VideoModel;

      const new_video: VideoSafeProps = {
        id: video_ref.id,
        name: video_data.name,
        duration: video_data.duration,
        free: video_data.free,
      };

      return new_video;
    })
  );
}
