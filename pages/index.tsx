import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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

      <Navbar />

      <main style={{ display: "grid", placeItems: "center", height: "100vh" }}>
        <div>
          <h1>DL3arn</h1>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
