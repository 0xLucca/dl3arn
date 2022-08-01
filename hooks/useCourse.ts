import { useEffect, useState } from "react";
import TypedFetch from "utils/TypedFetch";
import { APIGetCourseById } from "utils/types/course";

function useCourse({ id }: { id?: string }) {
  const [current, setCurrent] = useState<APIGetCourseById | null>(null);

  useEffect(() => {
    const p = async () => {
      try {
        if (!id) return null;
        const { data } = await TypedFetch<APIGetCourseById>(
          `/api/courses/${id}`
        );
        if (!data) return null;
        data.videos.sort((a, b) => {
          if (!a || !b) return 0;
          return Number(b.free) - Number(a.free);
        });
        setCurrent(data);
      } catch (e) {
        console.log(e);
      }
    };
    p();
  }, [id]);

  return { current };
}

export default useCourse;
