import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { DesktopTower, Link, X } from "phosphor-react";
import { useRef, useState } from "react";
import { ImageItem, ImageItemType } from "../slices/collections";

const isValidURL = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const AddImage: React.FC<{ addImage: (image: ImageItem) => void }> = ({
  addImage,
}) => {
  const [imgURL, setImgURL] = useState<string>("");
  const [file, setFile] = useState<string | undefined>();
  const toast = useToast();
  const isURL = isValidURL(imgURL);
  const isFile = file != undefined;
  const ref = useRef<HTMLInputElement>(null);

  const submitHandler = () => {
    if (isURL)
      addImage({
        data: imgURL,
        type: ImageItemType.url,
      });

    if (isFile)
      addImage({
        data: file,
        type: ImageItemType.file,
      });
    setFile(undefined);
    setImgURL("");
  };

  return (
    <Flex flexDir="column" boxShadow="2xl" align="center" px="2rem" py="1rem">
      <Flex align="center" justify="center" gap="2rem">
        <Button
          borderRadius="100px"
          bgColor={isURL ? "green" : "blackAlpha.800"}
          opacity="0.5"
          padding="10px"
          aria-label="add image url"
          h="auto"
          _hover={{
            cursor: "pointer",
            bgColor: isURL ? "green.500" : "blackAlpha.600",
          }}
          onClick={() => ref.current?.focus()}
        >
          <Link z="5" color="white" size={24} />
        </Button>

        <Input
          id="image-input"
          accept="image/*"
          type="file"
          style={{ display: "none" }}
          onChange={(e) => {
            if (e.target.files && e.target.files[0] !== undefined) {
              toast({
                title: "Added",
                description: "Image added from PC!",
                status: "success",
                duration: 3000,
              });
              const data = URL.createObjectURL(e.target.files[0]);
              setFile(data);
            } else
              toast({
                title: "Failed",
                description: "Failed to upload image from PC!",
                status: "error",
                duration: 3000,
              });
          }}
        />
        <FormLabel m="0" htmlFor="image-input">
          <Tooltip label="Add image">
            {/* Todo convert Box */}
            <Box
              //as="button"
              borderRadius="100px"
              _hover={{
                cursor: "pointer",
                bgColor: isFile ? "green.500" : "blackAlpha.600",
              }}
              bgColor={isFile ? "green" : "blackAlpha.800"}
              opacity="0.5"
              h="auto"
              padding="10px"
            >
              <DesktopTower z="5" color="white" size={24}>
                <Input type="file" />
              </DesktopTower>
            </Box>
          </Tooltip>
        </FormLabel>

        <Tooltip label="Remove Image">
          <Button
            minW="0"
            borderRadius="100px"
            _hover={{
              cursor: "pointer",
              bgColor: "red",
            }}
            bgColor="red.500"
            opacity="1"
            padding="10px"
            h="auto"
            onClick={() => {
              setFile(undefined);
            }}
            visibility={isFile ? "visible" : "hidden"}
          >
            <X z="5" color="white" size={24} />
          </Button>
        </Tooltip>
      </Flex>
      <FormControl>
        <FormLabel htmlFor="img-URL">Enter image URL</FormLabel>
        <Input
          ref={ref}
          bgColor="white"
          placeholder="https://yourimg.com/img"
          value={imgURL}
          onChange={(e) => setImgURL(e.target.value)}
        />
      </FormControl>
      <Button
        isDisabled={!isURL && !isFile}
        onClick={submitHandler}
        w="50%"
        mt="1rem"
      >
        Add to Collection
      </Button>
    </Flex>
  );
};
export default AddImage;
