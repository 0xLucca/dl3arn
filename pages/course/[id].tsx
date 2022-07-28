import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Courses from "mockups/cards.json";
import { ClockIcon } from "utils/icons";
import { Container } from "styles/course.styles";

function Course() {
  const router = useRouter();
  const { id } = router.query;

  const { course } = useCourse({ id });

  if (!course) return <div>course not found</div>;

  return (
    <Container>
      <main>
        <ul className="videos">
          {course.videos.map((video) => (
            <li key={video.id} className={`video ${video.pay ? "pay" : ""}`}>
              <p>{video.name}</p>
              <span>
                <ClockIcon />
                {video.duration}
              </span>
            </li>
          ))}
        </ul>

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

function useCourse({ id }: { id?: string | string[] }) {
  const [course, setCourse] = useState<typeof Courses[number] | null>(null);

  useEffect(() => {
    if (!id || typeof id !== "string") return;
    const courses = Courses.find((course) => id === course.id);
    if (!courses) return setCourse(null);
    return setCourse(courses);
  }, [id]);

  return { course };
}
