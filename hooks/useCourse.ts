import { useEffect, useState } from "react";
import { GetCourse } from "utils/types/Course";

type Data = Partial<GetCourse>;

function useCourse({ id }: { id?: string }) {
  const [current, setCurrent] = useState<Data | null>(null);

  useEffect(() => {
    const p = async () => {
      if (!id) return null;
      fetch(`/api/courses/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setCurrent(data as Data);
        });
    };
    p();
  }, [id]);

  return { current };
}

export default useCourse;
