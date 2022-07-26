import { Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gallery</title>
        <meta name="description" content="A gallery of your favorite images!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading
        textTransform="uppercase"
        letterSpacing="0.3rem"
        mt="2rem"
        as="h1"
        textAlign="center"
        fontWeight="400"
      >
        Gallery
      </Heading>
    </>
  );
};

export default Home;
