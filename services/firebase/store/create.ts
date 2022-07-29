import { addDoc, collection } from "firebase/firestore";
import { db } from "..";

const createDoc = async () => {
  const data = {
    name: "Learn Figma",
    description: "Lorem ipsum dolor sit amet",
    total_duration: "6h 50min",
    instructor: { name: "Elmer Hallowell" },
    videos: [
      { name: "Figma basics", duration: "30min" },
      { name: "Figma Animations", duration: "1h 30min" },
    ],
  };
  const result = await addDoc(collection(db, "test-course"), data);
  console.log(result);
  return result;
};

export default createDoc;
