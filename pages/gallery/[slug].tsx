import {
  Box,
  Center,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Hamburger, List, Pencil, PencilSimple, X } from "phosphor-react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import DisplayImage from "../../components/display-image";
import GalleryForm from "../../components/gallery-form";
import { removeCollection } from "../../slices/collections";

export default function GalleryItem() {
  const router = useRouter();
  const { slug } = router.query;
  const id = typeof slug === "string" ? parseInt(slug) : 0;

  const dispatch = useAppDispatch();
  const collection = useAppSelector((state) => {
    if (id >= state.collectionsReducer.length) return false;
    return state.collectionsReducer[id];
  });

  const [edit, setEdit] = useState<boolean>(false);

  const removeCollectionHandler = () => {
    dispatch(removeCollection({ id }));
    router.push("/");
  };

  if (collection === false) {
    return (
      <Heading
        textTransform="uppercase"
        letterSpacing="0.3rem"
        pt="2rem"
        as="h1"
        textAlign="center"
        fontWeight="400"
      >
        Collection not found!
      </Heading>
    );
  }

  return (
    <>
      <Head>
        <title>{collection?.title}</title>
        <meta name="description" content={collection?.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading as="h1" pt="2rem" textAlign="center" fontWeight="400">
        {collection.title}
      </Heading>
      <Text textAlign="center" mt="2rem" mx="auto">
        {collection.description}
      </Text>
      {edit ? (
        <GalleryForm collectionId={id} />
      ) : (
        <>
          <Menu>
            <MenuButton
              colorScheme="black"
              position="absolute"
              right="10px"
              top="10px"
              as={IconButton}
              aria-label="Options"
              icon={<List />}
              variant="outline"
            />
            <MenuList>
              <MenuItem onClick={removeCollectionHandler} icon={<X />}>
                Delete
              </MenuItem>
              <MenuItem onClick={() => setEdit(true)} icon={<PencilSimple />}>
                Edit
              </MenuItem>
            </MenuList>
          </Menu>
          <Flex
            gap="10px"
            mt="2rem"
            wrap="wrap"
            pb={collection.images.length > 0 ? "1rem" : "0rem"}
            w={{ base: "90%", md: "50%" }}
            mx="auto"
          >
            {collection.images.map((item, index) => (
              <DisplayImage {...item} key={index} />
            ))}
          </Flex>
        </>
      )}
    </>
  );
}
