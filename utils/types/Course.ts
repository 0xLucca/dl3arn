interface Instructor {
  name: string;
}
interface Video {
  name: string;
  duration: string;
}

interface Course {
  name: string;
  description: string;
  total_duration: string;
  instructor: Instructor;
  videos: Video[];
}

export default Course;

const course: Course = {
  name: "Learn Figma",
  description: "Lorem ipsum dolor sit amet",
  total_duration: "6h 50min",
  instructor: { name: "Elmer Hallowell" },
  videos: [
    { name: "Figma basics", duration: "30min" },
    { name: "Figma Animations", duration: "1h 30min" },
  ],
};
