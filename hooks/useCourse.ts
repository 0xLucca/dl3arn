import { useEffect, useState } from "react";
import getCourse from "services/firebase/store/getCourse";
import { GetCourse } from "utils/types/Course";

function useCourse({ id }: { id?: string | string[] }) {
  const [current, setCurrent] = useState<Partial<GetCourse> | null>(null);

  useEffect(() => {
    const p = async () => {
      if (!id || typeof id !== "string") return null;

      const res = await getCourse(id);
      if (!res) return null;
      setCurrent(res);
    };
    p();
  }, [id]);

  return { current };
}

export default useCourse;
