import { createSlice } from "@reduxjs/toolkit";

export type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  population: string;
  edited: string;
  climate: string;
  surface_water: string;
  url: string;
};

export type PlanetState = {
  planetList: Array<Planet>;
  planetData: Record<string, Planet>;
  selectedPlanetData?: Planet | null;
};

type SetPlanetDataAction = {
  payload: Planet;
  type: string;
};

type SetPlanetsListAction = {
  payload: Array<Planet>;
  type: string;
};

type SetSelectedPlanetAction = {
  payload: Planet;
  type: string;
};

const initialState: PlanetState = {
  planetList: [],
  planetData: {},
  selectedPlanetData: null,
};

export const planetSlice = createSlice({
  name: "planet",
  initialState,
  reducers: {
    setPlanetsList: (state: PlanetState, action: SetPlanetsListAction) => {
      state.planetList = action.payload;
    },
    setPlanetData: (state: PlanetState, action: SetPlanetDataAction) => {
      state.planetData[action.payload.name] = action.payload;
      state.selectedPlanetData = action.payload;
    },
    setSelectedPlanet: (
      state: PlanetState,
      action: SetSelectedPlanetAction
    ) => {
      state.selectedPlanetData = action.payload;
    },
    resetSelectedPlanet: (state: PlanetState) => {
      state.selectedPlanetData = null;
    },
  },
});

export const {
  setPlanetData,
  setPlanetsList,
  setSelectedPlanet,
  resetSelectedPlanet,
} = planetSlice.actions;

export default planetSlice.reducer;
