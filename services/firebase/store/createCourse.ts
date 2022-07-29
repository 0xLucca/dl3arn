import { addDoc } from "firebase/firestore";
import { coursesCollection } from "../store/collections";
import Course from "utils/types/Course";

type CreateCourse = Omit<Course, "videos" | "uid">;

async function createCourse() {
  const course: CreateCourse = {
    name: "Learn Figma",
    description: "Lorem ipsum dolor sit amet",
    total_duration: "6h 50min",
    score: 5,
    image: "https://picsum.photos/1920/1080",

    instructor: { name: "Elmer Hallowell" },
  };
  const new_course = await addDoc(coursesCollection, course);
  return new_course;
}

export default createCourse;
