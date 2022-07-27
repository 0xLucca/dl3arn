import { useUser } from "context/firebase";
import type { NextPage } from "next";
import Head from "next/head";
import Router from "next/router";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const { user } = useUser();
  if (user) Router.push("/dashboard");
  return (
    <div>
      <Head>
        <title>DL3arn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
