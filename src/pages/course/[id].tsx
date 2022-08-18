import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { createElement, useEffect, useState } from "react";

import { getImage } from "services/firebase/storage";

import useCourse from "hooks/useCourse";
import useVideo from "hooks/useVideo";

import Loading from "components/Loading";
import RamppButton from "components/Buttons/RamppButton";
import Placeholder from "components/Placeholders";
import VideoContent from "components/Course/VideoContent";
import CourseIntro from "components/Course/CourseIntro";

import { Container } from "styles/course.styles";
import VideosMenu from "components/Course/VideosMenu";
import ShareButton from "components/Buttons/ShareButton";

function Course() {
  const [params, setSearchParams] = useSearchParams();

  const { id } = useParams();
  const videoId = params.get("videoId");

  const { current, locked } = useCourse({ id });

  const isFree = current?.videos.filter((video) => video.id === videoId)![0]
    ?.free;

  const { video, isLoading } = useVideo({
    video: {
      id: videoId || "",
      free: !!isFree,
    },
    locked: locked,
  });

  const handleVideo = (_id?: string | null) =>
    _id === null ? null : setSearchParams({ videoId: _id || "" });

  const [imgUrl, setImgUrl] = useState<string | null>(null);

  useEffect(() => {
    if (current && current.image)
      getImage(current.image).then((url) => setImgUrl(url));
  }, [current]);

  const getVideo = (diff: number) => {
    const available = current?.videos.filter((video) => !!video.duration);
    if (available && !videoId) return available[0].id;

    const videoIndex = available?.findIndex((video) => video.id === videoId);
    if (typeof videoIndex !== "number" || videoIndex === -1 || !available)
      return null;

    const newIndex = videoIndex + diff;
    if (newIndex < 0 || newIndex >= available.length) return null;
    return available[videoIndex + diff].id;
  };

  const prev = () => handleVideo(getVideo(-1));
  const next = () => handleVideo(getVideo(1));

  useEffect(() => {
    if (!imgUrl) return () => {};
    const shareImg = document.createElement("meta") as HTMLMetaElement & {
      property: string;
    };
    shareImg.property = "og:image";
    shareImg.content = imgUrl;
    document.head.appendChild(shareImg);
  }, [imgUrl]);

  return (
    <Container>
      <VideosMenu
        current={current}
        videoId={videoId}
        handleVideo={handleVideo}
        hasNFT={!locked}
      />

      <div className="course-content">
        <Loading isLoading={isLoading} element={<LoadingVideo />}>
          {!video && current && (
            <CourseIntro
              name={current.name}
              imgUrl={imgUrl}
              instructor={current.instructor}
              description={current.description}
              prev={prev}
              next={next}
            />
          )}

          {video && current && (
            <VideoContent
              name={video.name}
              videoId={video.id}
              instructor={current.instructor.name}
              courseName={current.name}
              next={next}
              prev={prev}
            />
          )}
        </Loading>
      </div>

      <div>
        <RamppButton rampp={current?.rampp} />
      </div>
    </Container>
  );
}

export default Course;

function LoadingVideo() {
  return (
    <div className="loading">
      <Placeholder width="100%" height="40rem" />
      <Placeholder width="75%" height="2.5rem" />
    </div>
  );
}
