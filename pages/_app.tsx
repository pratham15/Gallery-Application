import { ChakraProvider, Flex } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import NavBar from "../components/nav-bar";
import Layout from "../layout";
import customTheme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Flex h="100vh" w="100vw" flexDir="column">
        <NavBar />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
