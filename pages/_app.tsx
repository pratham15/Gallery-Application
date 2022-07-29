import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/store";
import NavBar from "../components/nav-bar";
import Layout from "../layout";
import customTheme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Box minH="100vh" w="100vw">
        <NavBar />
        <Layout>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Layout>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
