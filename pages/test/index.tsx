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

import cards from "../../mockups/cards.json";

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

function Test() {
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
            {Array.from({ length: 8 }).map((_, i) => (
              <Card
                key={i}
                name={cards[i].name}
                total_time={cards[i].total_time}
                score={cards[i].score}
                instructor={cards[i].instructor}
                image={cards[i].image}
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
