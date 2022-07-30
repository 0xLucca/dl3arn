import Head from "next/head";
import Router from "next/router";
import createCourse from "services/firebase/store/createCourse";
import styled from "styled-components";
import { exampleCourses } from "utils/types/Course";

import { PrimaryButton } from "../../components/Buttons";

import { NODE_ENV } from "../../constants";

const Container = getStyles();
function Test() {
  if (NODE_ENV !== "development") return Router.back();

  const uploadCourses = () => exampleCourses.map(createCourse);

  return (
    <Container>
      <Head>
        <title>DL3arn | Test page</title>
      </Head>

      <main style={{ margin: "5vh 0 0 0" }}>
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

export default Test;

function getStyles() {
  return styled.div`
    section {
      max-width: 1200px;
      margin: 0 auto;
    }

    .buttons {
      > div {
        max-width: 300px;
        margin: 1rem 0;
        display: flex;
        flex-flow: column;
        gap: 1rem;
      }
    }

    .cards {
      margin: 1rem 0;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem 3rem;
    }
  `;
}
