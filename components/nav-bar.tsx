import { Box, Flex } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

const NavLink: React.FC<{ href: string; title: string }> = ({
  href,
  title,
}) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <NextLink href={href} passHref>
      <Link
        position="relative"
        _before={{
          content: `""`,
          position: "absolute",
          display: "block",
          width: "100%",
          height: "2px",
          bottom: "0",
          left: "0",
          backgroundColor: "#000",
          transform: `scaleX(${isActive ? 1 : 0})`,
          // transformOrigin: "bottom right",
          transition: "transform 0.3s ease",
        }}
        _hover={{
          color: "gray.600",
          _before: { transform: "scaleX(1)" },
        }}
        href="/"
      >
        {title}
      </Link>
    </NextLink>
  );
};

const NavBar = () => (
  <Box
    borderBottom="0.5px solid"
    borderColor="gray.400"
    as="header"
    h="100px"
    w="100vw"
  >
    <Flex
      align="center"
      justify="space-evenly"
      as="nav"
      m="auto"
      h="100%"
      maxW={{ md: "80vw", base: "100%" }}
      borderX="0.5px solid"
      borderColor="gray.400"
    >
      <NavLink title="Gallery" href="/" />
      <NavLink title="Add Collection" href="/add-collection" />
    </Flex>
  </Box>
);

export default NavBar;
