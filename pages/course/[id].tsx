import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Courses from "mockups/cards.json";
import { ClockIcon } from "utils/icons";
import { Container } from "styles/course.styles";
import Head from "next/head";

function Course() {
  const router = useRouter();
  const { id, videoId } = router.query;

  const { course, videos } = useCourse({ id });

  const { video } = useVideo({ courseId: id, videoId });

  if (!course) return <div>course not found</div>;

  const handleVideo = (_id: string) =>
    router.push(`${id}?videoId=${_id}`, undefined, { shallow: true });

  return (
    <Container>
      <Head>
        <title>DL3arn | {course.name}</title>
      </Head>
      <main>
        <section className="videos">
          <ul>
            {videos?.map((video) => (
              <Video
                onClick={() => handleVideo(video.id)}
                key={video.id}
                {...video}
              />
            ))}
          </ul>
        </section>

        {video ? (
          <div className="course-content">
            <h1>{video.name}</h1>
          </div>
        ) : (
          <div className="course-content">
            <div>
              <h1>{course.name}</h1>
              <p className="instructor">by {course.instructor}</p>
            </div>

            <p className="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
              aliquid repudiandae soluta, placeat et inventore impedit unde
              cumque, corrupti enim nobis esse rem eos qui. Harum quas eum cum
              explicabo? Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Repudiandae nam aliquid amet magni incidunt quibusdam
              temporibus. A, temporibus eos veniam corporis deleniti recusandae
              impedit, perferendis quo non debitis facere perspiciatis.
              Aspernatur cumque maxime sed asperiores necessitatibus natus
              officiis, porro voluptatem enim quasi iusto iste ea, voluptas nam
              ad voluptates alias sint tempore similique hic magnam ducimus
              saepe facere mollitia? Quos. Aliquam ab mollitia est eaque autem,
              eius eos at doloremque nobis in ex soluta quos voluptatem
              repellendus repellat veritatis a! Iusto beatae deleniti vitae
              itaque eligendi odio accusantium temporibus molestias?
            </p>
          </div>
        )}
      </main>
    </Container>
  );
}

export default Course;

type Video = typeof Courses[number]["videos"][number];
function useCourse({ id }: { id?: string | string[] }) {
  const [course, setCourse] = useState<typeof Courses[number] | null>(null);
  const [videos, setVideos] = useState<{ free: Video[]; pay: Video[] }>({
    free: [],
    pay: [],
  });

  useEffect(() => {
    if (!id || typeof id !== "string") return;
    const courses = Courses.find((course) => id === course.id);
    if (!courses) return setCourse(null);
    const _videos: { free: Video[]; pay: Video[] } = { free: [], pay: [] };
    courses.videos.forEach((video) => {
      if (video.pay) return _videos.pay.push(video);
      return _videos.free.push(video);
    });
    setVideos(_videos);
    return setCourse(courses);
  }, [id]);

  return { course, videos: [...videos.free, ...videos.pay] };
}

type UseVideoParams = {
  courseId?: string | string[];
  videoId?: string | string[] | null;
};
function useVideo({ courseId, videoId }: UseVideoParams) {
  const [video, setVideo] = useState<Video | null>(null);

  useEffect(() => {
    if (!courseId || typeof courseId !== "string") return;
    if (!videoId || typeof videoId !== "string") return;

    const _course = Courses.find((course) => courseId === course.id);
    if (!_course) return setVideo(null);
    const _video = _course.videos.find((video) => video.id === videoId);
    if (!_video) return setVideo(null);
    return setVideo(_video);
  }, [courseId, videoId]);

  return { video };
}

function Video({
  pay,
  name,
  duration,
  onClick,
}: {
  pay: boolean;
  name: string;
  duration: string;
  onClick(): any;
}) {
  return (
    <button onClick={onClick} className={`video ${pay ? "pay" : ""}`}>
      <p>{name}</p>
      <span>
        {duration}
        <ClockIcon />
      </span>
    </button>
  );
}
