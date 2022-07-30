import Head from "next/head";
import Router from "next/router";
import createCourse from "services/firebase/store/createCourse";
import { exampleCourses, Video } from "utils/types/Course";
import { Container } from "styles/test.styles";

import { PrimaryButton } from "../../components/Buttons";

import { NODE_ENV } from "../../constants";
import { useEffect, useState } from "react";
import { auth } from "services/firebase";
import { auth as adminAuth } from "services/firebase/admin";
import { GetServerSideProps } from "next";
import privateRoute from "utils/privateRoute";

function Test() {
  const video = useTest();
  console.log(video);

  if (NODE_ENV !== "development") return Router.back();

  return (
    <Container>
      <Head>
        <title>DL3arn | Test page</title>
      </Head>

      <main style={{ margin: "5vh 0 0 0" }}>
        <section>
          <h2>Test video authorization</h2>
          {video ? (
            <div>
              <h3>{video.name}</h3>
            </div>
          ) : (
            <div>You don&apos;t have this video</div>
          )}
        </section>
        <section>
          <h2>Load Mockups</h2>
          <div>
            <PrimaryButton onClick={uploadCourses}>Curses</PrimaryButton>
          </div>
        </section>
      </main>
      <footer></footer>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isUnauthenticated = await privateRoute(context);
  if (isUnauthenticated) return isUnauthenticated;
  return { props: {} };
};

export default Test;

function useTest() {
  const [data, setData] = useState<Video | null>(null);

  useEffect(() => {
    const p = async () => {
      const { data } = await fetch("/api", {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: "2nkDIwmSXL7HNBvOvCSH",
          token: (await auth.currentUser?.getIdToken()) || null,
        }),
        method: "POST",
      }).then((res) => res.json());

      if (!data) return setData(data as null);
      return setData(data as Video);
    };
    // p();
  }, []);

  useEffect(() => {}, [data]);

  return data;
}

function uploadCourses() {
  return exampleCourses.map(createCourse);
}
