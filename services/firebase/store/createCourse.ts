import { addDoc } from "firebase/firestore";
import { coursesCollection, videosCollection } from "../store/collections";
import { CreateCourse } from "utils/types/Course";

async function createCourse(newCourse: CreateCourse) {
  const { videos } = newCourse;

  if (!videos || !videos.length)
    return await addDoc(coursesCollection, newCourse);

  const refs = await Promise.all(
    videos.map(async (video) => {
      return await addDoc(videosCollection, video);
    })
  );

  const parsedCourse = {
    ...newCourse,
    videos: refs.map((ref) => ref.id),
  };

  const res = await addDoc(coursesCollection, parsedCourse);

  console.log("completed");
  return res;

  // const new_course = await addDoc(coursesCollection, course);
  // return new_course;
}

export default createCourse;
