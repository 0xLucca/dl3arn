import { getDocs, query } from "firebase/firestore";
import { coursesCollection } from "./collections";

const q = query(coursesCollection);

async function getCourses() {
  const courses = await getDocs(q);
  return courses.docs.map((course) => course.data());
}

export default getCourses;
