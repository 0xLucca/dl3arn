import { CourseModel } from "./firebase";
import { VideoSafeProps } from "./video";

export type APIGetCourseById = Omit<CourseModel, "videos"> & {
  videos: (VideoSafeProps | null)[];
};
