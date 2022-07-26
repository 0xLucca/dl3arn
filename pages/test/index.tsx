import Head from "next/head";
import Router from "next/router";
import styled from "styled-components";

import {
  PrimaryButton,
  SecondaryButton,
  SimpleButton,
} from "../../components/Buttons";
import Card from "../../components/Dashboard/Card";
import CardPlaceholder from "../../components/Placeholders/Card";

import { NODE_ENV } from "../../constants";
import useCourses from "../../hooks/useCourses";

const Container = getStyles();
function Test() {
  const { courses, isLoading } = useCourses();
  if (NODE_ENV !== "development") return Router.back();

  return (
    <Container>
      <Head>
        <title>DL3arn | Test page</title>
      </Head>

      <main style={{ margin: "5vh 0 0 0" }}>
        <section className="buttons">
          <h2>buttons</h2>
          <div>
            <PrimaryButton>Simple</PrimaryButton>
            <SecondaryButton>Simple</SecondaryButton>
            <SimpleButton>Simple</SimpleButton>
          </div>
        </section>

        <section className="cards">
          <h2>courses</h2>

          <div>
            {Array.from({ length: 8 }).map((_, i) =>
              !isLoading ? (
                <Card
                  key={i}
                  id={courses[i].id}
                  name={courses[i].name}
                  time={courses[i].time}
                  score={courses[i].score}
                  instructor={courses[i].instructor}
                  image={courses[i].image}
                />
              ) : (
                <CardPlaceholder />
              )
            )}
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
      max-width: 1200px;
      margin: 10vh auto;
      > div {
        margin: 1rem 0;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem 3rem;
      }
    }
  `;
}
