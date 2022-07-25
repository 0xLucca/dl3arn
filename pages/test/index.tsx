import Head from "next/head";
import Router from "next/router";

import {
  PrimaryButton,
  SecondaryButton,
  SimpleButton,
} from "../../components/Buttons";

function Test() {
  if (process.env.NODE_ENV !== "development") return Router.back();

  return (
    <div>
      <Head>
        <title>DL3arn | Test page</title>
      </Head>

      <main>
        <h1>Test</h1>

        <div>
          <PrimaryButton>Simple</PrimaryButton>
          <SecondaryButton>Simple</SecondaryButton>
          <SimpleButton>Simple</SimpleButton>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default Test;
