import { configureStore } from "@reduxjs/toolkit";
import planetReducer, { PlanetState } from "../pages/planetSlice";

export type AppState = {
  planet: PlanetState;
};

export const store = configureStore({
  reducer: {
    planet: planetReducer,
  },
});
