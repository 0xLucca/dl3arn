import { useRouter } from "next/router";
import YouTube, { YouTubeProps } from "react-youtube";
import { ClockIcon } from "utils/icons";
import { Container } from "styles/course.styles";
import Head from "next/head";
import useCourse from "hooks/useCourse";
import useVideo from "hooks/useVideo";
import { GetServerSideProps } from "next";
import privateRoute from "utils/privateRoute";

const opts: YouTubeProps["opts"] = {
  height: "575",
  width: "100%",

  playerVars: {
    autoplay: 0,
    controls: 1,
    disablekb: 1,
    fs: 1,
  },
};

function Course() {
  const router = useRouter();
  const { id, videoId } = router.query as { [key: string]: string };

  const { current } = useCourse({ id });
  const { video } = useVideo({ videoId });

  const handleVideo = (_id?: string) =>
    router.push(_id ? `${id}?videoId=${_id}` : id, undefined, {
      shallow: true,
    });

  return (
    <Container>
      <Head>
        <title>DL3arn | {current?.name}</title>
      </Head>
      <main>
        <aside className="videos">
          <button onClick={() => handleVideo()}>{current?.name}</button>
          <ul>
            {current?.videos?.map(
              (video) =>
                video && (
                  <Video
                    key={video.uid}
                    free={video.free}
                    duration={video.duration}
                    name={video.name}
                    current_video={!!videoId && video.uid === videoId}
                    onClick={() => handleVideo(video.uid)}
                  />
                )
            )}
          </ul>
        </aside>

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isUnauthenticated = await privateRoute(context);
  if (isUnauthenticated) return isUnauthenticated;
  return { props: {} };
};

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
