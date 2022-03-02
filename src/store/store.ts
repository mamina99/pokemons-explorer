import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../slices/pokemonSlice";
import backToTopReducer from "../slices/backToTopSlice";

export const store = configureStore({
  reducer: {
    backToTop: backToTopReducer,
    pokemon: pokemonReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;