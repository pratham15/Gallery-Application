import { Heading } from "@chakra-ui/react";
import Head from "next/head";
import GalleryForm from "../components/gallery-form";

export default function AddCollection() {
  return (
    <>
      <Head>
        <title>Add Collection</title>
        <meta
          name="description"
          content="Add a new collection to your favorite gallery!"
        />
      </Head>
      <Heading
        textTransform="uppercase"
        letterSpacing="0.3rem"
        pt="2rem"
        as="h1"
        textAlign="center"
        fontWeight="400"
      >
        New Collection
      </Heading>
      <GalleryForm isNew />
    </>
  );
}
