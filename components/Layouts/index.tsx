import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
function Layout({ children }: Props) {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <Head>
        <title>DL3arn</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
