import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

const GalleryForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <>
      <Heading
        textTransform="uppercase"
        letterSpacing="0.3rem"
        mt="2rem"
        as="h1"
        textAlign="center"
        fontWeight="400"
      >
        New Collection
      </Heading>
      <Flex
        flexDir="column"
        gap="2rem"
        maxW="700px"
        mt="2rem"
        mx="auto"
        as="form"
        px="50px"
      >
        <FormControl display="flex" alignItems="center">
          <FormLabel w="7rem" htmlFor="name">
            Name
          </FormLabel>
          <Input
            bgColor="white"
            id="name"
            name="name"
            placeholder="Trip to Disecto..."
            onChange={(e) => setName(e.target.value)}
            value={description}
          />
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel w="7rem" htmlFor="description">
            Description
          </FormLabel>
          <Textarea
            bgColor="white"
            id="name"
            name="name"
            placeholder="Adding a few photos from the office..."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </FormControl>
      </Flex>
    </>
  );
};

export default GalleryForm;
