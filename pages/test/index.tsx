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
  .buttons-container {
    display: flex;
    flex-flow: column;
    gap: 1rem;
    max-width: 300px;
    margin: 0 auto;
  }

  .cards {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
`;

function Test() {
  if (NODE_ENV !== "development") return Router.back();

  return (
    <Container>
      <Head>
        <title>DL3arn | Test page</title>
      </Head>

      <main>
        <h1>Test</h1>

        <div className="buttons-container">
          <PrimaryButton>Simple</PrimaryButton>
          <SecondaryButton>Simple</SecondaryButton>
          <SimpleButton>Simple</SimpleButton>
        </div>

        <div className="cards">
          {Array.from({ length: 8 }).map((_, i) => (
            <Card key={i} />
          ))}
        </div>
      </main>
      <footer></footer>
    </Container>
  );
}

export default Test;
