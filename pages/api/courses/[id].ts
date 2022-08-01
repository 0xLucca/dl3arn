import { db } from "services/firebase/admin";
import { APIHandler, API_ERRORS } from "utils/types/api";
import { APIGetCourseById } from "utils/types/course";
import { CourseModel, VideoModel } from "utils/types/firebase";
import { VideoSafeProps } from "utils/types/video";

interface Request {
  query: {
    id: string;
  };
}

const handler: APIHandler<Request, APIGetCourseById> = async (req, res) => {
  const { id } = req.query;
  if (!id)
    return res.status(404).json({
      data: null,
      success: false,
      error: { message: "Course not found", code: API_ERRORS.COURSE_NOT_FOUND },
    });

  const ref = await db.collection("courses").doc(id).get();
  const course = { id: ref.id, ...ref.data() } as CourseModel;

  const parsed_course: APIGetCourseById = {
    ...course,
    videos: await getVideos(course.videos),
  };

  res.status(200).json({ data: parsed_course, error: null, success: true });
};

export default handler;

async function getVideos(videos: string[]) {
  return await Promise.all(
    videos.map(async (video) => {
      if (typeof video !== "string") return null;
      const video_ref = await db.collection("videos").doc(video).get();
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
