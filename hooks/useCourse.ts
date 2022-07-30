import { useEffect, useState } from "react";
import TypedFetch from "utils/TypedFetch";
import { APIGetCourseById } from "utils/types/course";

function useCourse({ id }: { id?: string }) {
  const [current, setCurrent] = useState<APIGetCourseById | null>(null);

  useEffect(() => {
    const p = async () => {
      if (!id) return null;
      const course = await TypedFetch<APIGetCourseById>(`/api/courses/${id}`);
      setCurrent(course);
    };
    p();
  }, [id]);

  return { current };
}

export default useCourse;
