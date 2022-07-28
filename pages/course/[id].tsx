import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Courses from "mockups/cards.json";
import { ClockIcon } from "utils/icons";
import { Container } from "styles/course.styles";
import Head from "next/head";

function Course() {
  const router = useRouter();
  const { id } = router.query;

  const { course, videos } = useCourse({ id });

  if (!course) return <div>course not found</div>;

  return (
    <Container>
      <Head>
        <title>DL3arn | {course.name}</title>
      </Head>
      <main>
        <section className="videos">
          <h2>Gratuitos</h2>
          <ul>
            {videos?.free.map((video) => (
              <Video key={video.id} {...video} />
            ))}
          </ul>
          <h2>Pagos</h2>
          <ul>
            {videos?.pay.map((video) => (
              <Video key={video.id} {...video} />
            ))}
          </ul>
        </section>

        <div className="course-content">
          <div>
            <h1>{course.name}</h1>
            <p className="instructor">by {course.instructor}</p>
          </div>

          <p className="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
            aliquid repudiandae soluta, placeat et inventore impedit unde
            cumque, corrupti enim nobis esse rem eos qui. Harum quas eum cum
            explicabo? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae nam aliquid amet magni incidunt quibusdam temporibus. A,
            temporibus eos veniam corporis deleniti recusandae impedit,
            perferendis quo non debitis facere perspiciatis. Aspernatur cumque
            maxime sed asperiores necessitatibus natus officiis, porro
            voluptatem enim quasi iusto iste ea, voluptas nam ad voluptates
            alias sint tempore similique hic magnam ducimus saepe facere
            mollitia? Quos. Aliquam ab mollitia est eaque autem, eius eos at
            doloremque nobis in ex soluta quos voluptatem repellendus repellat
            veritatis a! Iusto beatae deleniti vitae itaque eligendi odio
            accusantium temporibus molestias?
          </p>
        </div>
      </main>
    </Container>
  );
}

export default Course;

type Video = typeof Courses[number]["videos"][number];
function useCourse({ id }: { id?: string | string[] }) {
  const [course, setCourse] = useState<typeof Courses[number] | null>(null);
  const [videos, setVideos] = useState<{ free: Video[]; pay: Video[] } | null>(
    null
  );

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

  return { course, videos };
}

function Video({
  pay,
  name,
  duration,
}: {
  pay: boolean;
  name: string;
  duration: string;
}) {
  return (
    <li className={`video ${pay ? "pay" : ""}`}>
      <p>{name}</p>
      <span>
        {duration}
        <ClockIcon />
      </span>
    </li>
  );
}
