import cards from "../mockups/cards.json";
import { useEffect, useState } from "react";
import { Course } from "../utils/types";

interface Data {
  isLoading: boolean;
  courses: Course[];
}
function useCourses(): Data {
  const [data, setData] = useState<Data>({
    isLoading: true,
    courses: [],
  });

  useEffect(() => {
    const p = async () => {
      setData((old) => ({ ...old, isLoading: true }));
      setTimeout(() => {
        setData((old) => ({ ...old, courses: cards, isLoading: false }));
      }, 5000);
    };
    p();
  }, []);

  return data;
}

export default useCourses;
