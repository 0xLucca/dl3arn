import Head from "next/head";
import Router from "next/router";
import styled from "styled-components";

import {
  PrimaryButton,
  SecondaryButton,
  SimpleButton,
} from "../../components/Buttons";
import Card from "../../components/Dashboard/Card";

import { NODE_ENV } from "../../constants";

const Container = styled.div`
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

const cards = Array.from({ length: 8 }).map(() => ({
  image: `https://picsum.photos/1920/1080?random=${Math.floor(
    Math.random() * 50
  )}`,
  name: "learn figma",
  instructor: "Christopher Morgan",
  total_time: "6h 30min",
  score: "4,9",
}));

function Test() {
  if (NODE_ENV !== "development") return Router.back();

  return (
    <Container>
      <Head>
        <title>DL3arn | Test page</title>
      </Head>

      <main>
        <h1>Test</h1>

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
            {cards.map(({ name, total_time, score, instructor, image }, i) => (
              <Card
                name={name}
                total_time={total_time}
                score={score}
                instructor={instructor}
                image={image}
                key={i}
              />
            ))}
          </div>
        </section>
      </main>
      <footer></footer>
    </Container>
  );
}

export default Test;
