import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { StateType } from "./store";

const selectSelf = (state: StateType) => state;

//static reducer
export const selectPriceItems = createDraftSafeSelector(selectSelf, state => state.static.prices);
export const selectReviewItems = createDraftSafeSelector(selectSelf, state => state.static.reviews);
export const selectNewsItems = createDraftSafeSelector(selectSelf, state => state.static.news);
export const selectBlogItems = createDraftSafeSelector(selectSelf, state => state.static.blog);