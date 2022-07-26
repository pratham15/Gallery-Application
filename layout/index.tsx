import { Container } from "@chakra-ui/react";
import React, { ReactChildren } from "react";

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => (
  <Container
    borderX="0.5px solid"
    borderColor="gray.400"
    w={{ lg: "min(1024px, 90vw)", md: "768px", base: "100%" }}
    maxW="auto"
    mx="auto"
    h="100%"
    bgColor="gray.100"
  >
    {children}
  </Container>
);

export default Layout;
