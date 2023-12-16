const { configureStore } = require("@reduxjs/toolkit");
import favReducer from "./favourites";

export const store = configureStore({
    reducer: {
        favorites:favReducer
    },
  });