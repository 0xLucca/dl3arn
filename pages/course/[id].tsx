import { useRouter } from "next/router";
import YouTube, { YouTubeProps } from "react-youtube";
import { Container } from "styles/course.styles";
import Head from "next/head";
import useCourse from "hooks/useCourse";
import useVideo from "hooks/useVideo";
import { GetServerSideProps } from "next";
import privateRoute from "utils/privateRoute";
import Video from "components/Course/Video";

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
  const { video, error } = useVideo({ videoId });

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
          <button className="" onClick={() => handleVideo()}>
            {current?.name}
          </button>
          <ul>
            {current?.videos.map((video) => (
              <Video
                key={video?.id}
                video={video}
                selected={!!videoId && video?.id === videoId}
                onClick={() => handleVideo(video?.id)}
              />
            ))}
          </ul>
        </aside>

        <div className="course-content">
          {error && <div>{error.message}</div>}

          {!error && video ? (
            <>
              {video.videoId && <YouTube opts={opts} videoId={video.videoId} />}
              <div className="data">
                <h1>{video.name}</h1>
              </div>
            </>
          ) : null}

          {!error && !video && (
            <div className="course-container">
              <div>
                <h2 className="course-name">{current?.name}</h2>
                <p className="instructor">by {current?.instructor?.name}</p>
              </div>
              <p className="description">{current?.description}</p>
            </div>
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
