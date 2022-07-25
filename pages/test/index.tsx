import Head from "next/head";
import Router from "next/router";
import styled from "styled-components";

import {
  PrimaryButton,
  SecondaryButton,
  SimpleButton,
} from "../../components/Buttons";

import { NODE_ENV } from "../../constants";

const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 1rem;
  max-width: 300px;
  margin: 0 auto;
`;

function Test() {
  if (NODE_ENV !== "development") return Router.back();

  return (
    <div>
      <Head>
        <title>DL3arn | Test page</title>
      </Head>

      <main>
        <h1>Test</h1>

        <ButtonsContainer>
          <PrimaryButton>Simple</PrimaryButton>
          <SecondaryButton>Simple</SecondaryButton>
          <SimpleButton>Simple</SimpleButton>
        </ButtonsContainer>
      </main>
      <footer></footer>
    </div>
  );
}

export default Test;
