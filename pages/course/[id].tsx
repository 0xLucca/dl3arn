import { useRouter } from "next/router";
import YouTube, { YouTubeProps } from "react-youtube";
import { ClockIcon } from "utils/icons";
import { Container } from "styles/course.styles";
import Head from "next/head";
import useCourse from "hooks/useCourse";
import useVideo from "hooks/useVideo";

const opts: YouTubeProps["opts"] = {
  height: "575",
  width: "100%",

  playerVars: {
    autoplay: 1,
    controls: 0,
    disablekb: 1,
    fs: 1,
  },
};

function Course() {
  const router = useRouter();
  const { id, videoId } = router.query;

  const { current } = useCourse({ id });
  const { video } = useVideo({ videoId });

  const handleVideo = (_id?: string) =>
    _id && router.push(`${id}?videoId=${_id}`, undefined, { shallow: true });

  return (
    <Container>
      <Head>
        <title>DL3arn | {current?.name}</title>
      </Head>
      <main>
        <section className="videos">
          <ul>
            {current?.videos?.map(
              (video) =>
                video && (
                  <Video
                    onClick={() => handleVideo(video.uid)}
                    key={video.uid}
                    {...video}
                    current_video={video.uid === videoId}
                  />
                )
            )}
          </ul>
        </section>

        <div className="course-content">
          {video ? (
            <>
              {video.videoId && <YouTube opts={opts} videoId={video.videoId} />}
              <div className="data">
                <h1>{video.name}</h1>
                <p>{video.description}</p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h1>{current?.name}</h1>
                <p className="instructor">by {current?.instructor?.name}</p>
              </div>
              <p className="description">{current?.description}</p>
            </>
          )}
        </div>
      </main>
    </Container>
  );
}

export default Course;

function Video({
  current_video,
  free,
  name,
  duration,
  onClick,
}: {
  current_video: boolean;
  free: boolean;
  name: string;
  duration: string;
  onClick(): any;
}) {
  const className = `video ${free ? "" : "pay"} ${
    current_video ? "highlight" : ""
  }`;
  return (
    <button onClick={onClick} className={className}>
      <p>{name}</p>
      <span>
        {duration}
        <ClockIcon />
      </span>
    </button>
  );
}
