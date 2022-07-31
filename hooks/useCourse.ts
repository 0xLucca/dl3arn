import { useEffect, useState } from "react";
import TypedFetch from "utils/TypedFetch";
import { APIGetCourseById } from "utils/types/course";

function useCourse({ id }: { id?: string }) {
  const [current, setCurrent] = useState<APIGetCourseById | null>(null);

  useEffect(() => {
    const p = async () => {
      if (!id) return null;
      const course = await TypedFetch<APIGetCourseById>(`/api/courses/${id}`);
      course.videos.sort((a, b) => {
        if (!a || !b) return 0;
        return Number(b.free) - Number(a.free);
      });
      setCurrent(course);
    };
    p();
  }, [id]);

  return { current };
}

export default useCourse;
