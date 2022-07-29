import { Container } from "@chakra-ui/react";
import React, { ReactChildren } from "react";

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => (
  <Container
    borderX="0.5px solid"
    borderColor="gray.400"
    w={{ md: "80vw", base: "100%" }}
    maxW="auto"
    minH="calc(100vh - 100px)"
    mx="auto"
    bgColor="gray.100"
    position="relative"
  >
    {children}
  </Container>
);

export default Layout;
