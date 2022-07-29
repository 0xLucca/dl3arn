export interface Instructor {
  name: string;
}
export interface Video {
  name: string;
  duration: string;
}

export interface Course {
  uid: string;
  name: string;
  description?: string;
  total_duration: string;
  score: number;
  image: string;
  instructor: Instructor;
  videos: Video[];
}

export default Course;

const course: Omit<Course, "uid"> = {
  name: "Learn Figma",
  description: "Lorem ipsum dolor sit amet",
  total_duration: "6h 50min",
  score: 5,
  image: "https://picsum.photo/1920/1080",

  instructor: { name: "Elmer Hallowell" },
  videos: [
    { name: "Figma basics", duration: "30min" },
    { name: "Figma Animations", duration: "1h 30min" },
  ],
};
