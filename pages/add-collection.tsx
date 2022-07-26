import { Center } from "@chakra-ui/react";
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
      <GalleryForm />
    </>
  );
}
