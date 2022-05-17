import { configureStore } from "@reduxjs/toolkit";
import topicReducers from "../features/topics/topicsSlices";
import quizzesReducer from "../features/quizzes/quizzesSlice.js";
import cardsReducer from "../features/cards/cardsSlice";

export default configureStore({
  reducer: {
    topics: topicReducers,
    quizzes: quizzesReducer,
    cards: cardsReducer,
  },
});

