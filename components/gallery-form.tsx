import {
  Button,
  Flex,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { m } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addCollection,
  Collection,
  editCollection,
  ImageItem,
} from "../slices/collections";
import AddImage from "./add-image";
import DisplayImage from "./display-image";

export type GalleryFormPropsType = {
  isNew?: boolean;
  collectionId?: number;
};

const GalleryForm: React.FC<GalleryFormPropsType> = ({
  isNew = false,
  collectionId = -1,
}) => {
  const dispatch = useAppDispatch();
  const collections = useAppSelector((state) => state.collectionsReducer);
  let id = collections.length;

  //Chakra UI Toast
  const toast = useToast();
  let data: Collection = {
    description: "",
    title: "",
    images: [],
  };

  if (collectionId >= 0 && isNew === false) {
    data = collections[collectionId];
    id = collectionId;
  }

  const [title, setTitle] = useState<string>(data.title);
  const [description, setDescription] = useState<string>(data.description);
  const [images, setImages] = useState<ImageItem[]>(data.images);

  //To redirect after successful dispatch
  const router = useRouter();

  // state variables

  const addImage = (image: ImageItem) => setImages((prev) => [...prev, image]);
  const removeImage = (id: number) => {
    setImages((prev) => {
      console.log(prev);
      const arr = [...prev];
      arr.splice(id, 1);
      return arr;
    });
  };

  const validate: () => boolean = () => {
    if (title === "" || description === "" || images.length === 0) {
      toast({
        status: "error",
        title: "Unfilled inputs",
        description:
          "Please fill name and description, and have atleast one image added!",
      });
      return false;
    }
    return true;
  };
  const addNewCollection = () => {
    if (!validate()) return;
    if (isNew === false) {
      saveAfterEdit();
      return;
    }
    dispatch(
      addCollection({
        title,
        description,
        images,
      })
    );
    router.push("/gallery/" + id);
  };

  const saveAfterEdit = () => {
    const data = {
      title,
      description,
      images,
    };
    dispatch(
      editCollection({
        id,
        data,
      })
    );
    router.push("/");
  };

  return (
    <Flex
      flexDir="column"
      gap="2rem"
      maxW="700px"
      mt="2rem"
      mx="auto"
      as="form"
      px="50px"
    >
      <Flex dir="column">
        <FormLabel w="7rem" htmlFor="name">
          Title
        </FormLabel>
        <Input
          bgColor="white"
          id="name"
          name="name"
          placeholder="Trip to Disecto..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </Flex>
      <Flex dir="column">
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
      </Flex>

      <AddImage addImage={addImage} />
      <Flex gap="10px" wrap="wrap" pb={images.length > 0 ? "1rem" : "0rem"}>
        {images.map((item, index) => (
          <DisplayImage
            {...item}
            key={index}
            removeImage={() => removeImage(index)}
          />
        ))}
      </Flex>
      <Button onClick={addNewCollection} mb="2rem">
        {isNew ? "Create New Collection!" : "Save your edits!"}
      </Button>
    </Flex>
  );
};

export default GalleryForm;
