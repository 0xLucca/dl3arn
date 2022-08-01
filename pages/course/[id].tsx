import { useRouter } from "next/router";
import { Container } from "styles/course.styles";
import Head from "next/head";
import useCourse from "hooks/useCourse";
import useVideo from "hooks/useVideo";
import { GetServerSideProps } from "next";
import privateRoute from "utils/privateRoute";
import Video from "components/Course/Video";
import Loading from "components/Loading";

function Course() {
  const router = useRouter();
  const { id, videoId } = router.query as { [key: string]: string };

  const { current, locked } = useCourse({ id });

  const isFree = current?.videos.filter((video) => video.id === videoId)![0]
    ?.free;

  const { video, error, isLoading } = useVideo({
    video: {
      id: videoId,
      free: !!isFree,
    },
    locked: locked,
  });

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
          <button
            className={`course ${!videoId ? "active" : ""}`}
            onClick={() => handleVideo()}
          >
            {current?.name}
          </button>
          <ul>
            {current?.videos.map((video) => (
              <Video
                hasNFT={locked}
                key={video?.id}
                video={video}
                selected={!!videoId && video?.id === videoId}
                onClick={() => handleVideo(video?.id)}
              />
            ))}
          </ul>
        </aside>

        <div className="course-content">
          <Loading isLoading={isLoading} element={<LoadingVideo />}>
            {error && <div>{error.message}</div>}

            {!error && video ? (
              <>
                <iframe
                  id="ytplayer"
                  width="100%"
                  height="575"
                  src={`https://www.youtube.com/embed/${video.videoId}?autoplay=0&origin=http://example.com`}
                  frameBorder="0"
                />

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
          </Loading>
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

function LoadingVideo() {
  return (
    <div className="loading">
      <div>Loading your video</div>
    </div>
  );
}
