import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ImageItemType {
  url,
  file,
}

export type ImageItem = {
  type: ImageItemType;
  data: string;
};

export type Collection = {
  title: string;
  description: string;
  images: ImageItem[];
};
type Collections = Collection[];

const initialState: Collections = [];

export const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {
    // add a new collection
    addCollection: (state: Collections, action: PayloadAction<Collection>) => {
      state.push(action.payload);
      return state;
    },

    // Remove a collection by id
    removeCollection: (
      state: Collections,
      action: PayloadAction<{ id: number }>
    ) => {
      state.splice(action.payload.id, 1);
      return state;
    },

    // Add image to a certain collection
    editCollection: (
      state: Collections,
      action: PayloadAction<{ id: number; data: Collection }>
    ) => {
      state[action.payload.id] = action.payload.data;
      return state;
    },
  },
});

export default collectionsSlice.reducer;

export const { addCollection, editCollection, removeCollection } =
  collectionsSlice.actions;
