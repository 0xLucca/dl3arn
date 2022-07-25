import type { NextPage } from "next";
import Head from "next/head";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DL3arn | Landing</title>
        <meta
          name="description"
          content="Generated by @rainbow-me/create-rainbowkit"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ display: "grid", placeItems: "center", height: "100vh" }}>
        <div>
          <h1>DL3arn</h1>

          <PrimaryButton>Login</PrimaryButton>
          <SecondaryButton>Login</SecondaryButton>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
