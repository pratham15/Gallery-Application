import { Box, Flex, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import { X } from "phosphor-react";
import { ImageItem, ImageItemType } from "../slices/collections";

const DisplayImage: React.FC<
  ImageItem & {
    removeImage?: () => void;
  }
> = ({ data, type, removeImage }) => {
  return (
    <Flex
      as="picture"
      position="relative"
      boxShadow="xl"
      border="1px solid white"
    >
      {removeImage != undefined && (
        <IconButton
          minW="0px"
          position="absolute"
          right="0"
          top="0"
          zIndex={100}
          aria-label="Remove Image"
          bg="white"
          h="20px"
          w="20px"
          icon={<X size={10} />}
          onClick={removeImage}
        />
      )}

      {ImageItemType.file === type ? (
        <Image src={data} alt="Collection Image" height="100px" width="100px" />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={data} alt="Collection image" height="100px" width="100px" />
      )}
    </Flex>
  );
};
export default DisplayImage;
