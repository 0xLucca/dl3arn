import { useAuth } from "context/firebase";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const { data } = useAuth();
  const { user, isLoading } = data;

  const router = useRouter();
  useEffect(() => {
    if (!isLoading && user && user.emailVerified) router.push("/dashboard");
  }, [user, isLoading, router]);

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
