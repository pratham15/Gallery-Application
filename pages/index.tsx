import {
  chakra,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ArrowSquareOut } from "phosphor-react";
import { useAppSelector } from "../app/hooks";
const ArrowSquareOutChakra = chakra(ArrowSquareOut);
const Home: NextPage = () => {
  const collections = useAppSelector((state) => state.collectionsReducer);
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
        pt="2rem"
        as="h1"
        textAlign="center"
        fontWeight="400"
      >
        Gallery
      </Heading>

      {collections.length > 0 ? (
        <Flex
          mt="1rem"
          justify={{ base: "center", md: "start" }}
          wrap="wrap"
          gap="2rem"
          mx="auto"
          maxW="90%"
        >
          {collections.map((collection, id) => (
            <LinkBox
              noOfLines={1}
              display="flex"
              flexDir="column"
              key={id}
              as="article"
              p="1rem"
              borderWidth="2px"
              rounded="md"
              flex={1}
              minW="12rem"
              maxW="15rem"
              position="relative"
            >
              <Link href={"/gallery/" + id}>
                <LinkOverlay>
                  <ArrowSquareOutChakra
                    size={20}
                    position="absolute"
                    right="5px"
                    top="5px"
                    cursor="pointer"
                    _hover={{
                      borderBottom: "0.1px solid black",
                    }}
                  />
                </LinkOverlay>
              </Link>
              <Heading
                textAlign="center"
                fontWeight="400"
                fontSize="1rem"
                as="h3"
              >
                {collection.title}
              </Heading>
              <Text textAlign="center" noOfLines={3}>
                {collection.description}
              </Text>
            </LinkBox>
          ))}
        </Flex>
      ) : (
        <Text>No collects yet!</Text>
      )}
    </>
  );
};

export default Home;
