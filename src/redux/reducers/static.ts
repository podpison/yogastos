import { createReducer, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";
import { itemsAPI } from "../../api";

export type PriceItemType = {
  price: string
  name: string
  description: string
  advantages: string[]
}

export type ReviewsItemType = {
  heading: string
  description: string
  stars: number
  user: string
}

const initialState = {
  prices: [] as PriceItemType[],
  reviews: [] as ReviewsItemType[]
};

export type StateKeysType = keyof typeof initialState

type SetStaticItemsType = {
  items: DocumentData[]
  key: StateKeysType
}

const setStaticItems = createAction<SetStaticItemsType>('static/setItems');

export const staticReducer = createReducer(initialState, builder => {
  builder.addCase(setStaticItems, (state, action) => {
    type KeyType = typeof action.payload.key;
    return {
      ...state,
      [action.payload.key]: action.payload.items as typeof initialState[KeyType]
    }
  });
  builder.addDefaultCase(() => { });
});

export const getStaticItems = createAsyncThunk('static/getItems', async (collection: StateKeysType, thunkAPI) => {
  let items = await itemsAPI.get(collection);
  thunkAPI.dispatch(setStaticItems({ items, key: collection }));
});