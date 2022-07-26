import { Container } from "@chakra-ui/react";
import React, { ReactChildren } from "react";

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => (
  <Container
    borderX="0.5px solid"
    borderColor="gray.400"
    w={{ md: "80vw", base: "100%" }}
    maxW="auto"
    mx="auto"
    h="100%"
    bgColor="gray.100"
  >
    {children}
  </Container>
);

export default Layout;
