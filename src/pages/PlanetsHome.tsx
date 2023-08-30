import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./PlanetsHome.scss";
import { Card } from "../components/Card";
import {
  Planet,
  resetSelectedPlanet,
  setPlanetData,
  setPlanetsList,
  setSelectedPlanet,
} from "./planetSlice";
import { Loader } from "../components/Loader";
import { PlanetModal } from "../components/PlanetModal";
import { AppState } from "../redux/store";

function PlanetList() {
  const dispatch = useDispatch();
  const planets = useSelector((state: AppState) => state.planet.planetList);
  const planetData = useSelector((state: AppState) => state.planet.planetData);
  const selectedPlanet = useSelector(
    (state: AppState) => state.planet.selectedPlanetData
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlanets() {
      try {
        setLoading(true);
        fetch("https://swapi.dev/api/planets")
          .then((res) => {
            if (res.status === 200) {
              return res.json();
            }
          })
          .then((data) => {
            dispatch(setPlanetsList(data.results));
          })
          .finally(() => setLoading(false));
      } catch (error) {
        console.error(error);
      }
    }
    fetchPlanets();
  }, [dispatch]);

  const fetchPlanetData = useCallback(
    async (name: string, url: string) => {
      if (!planetData[name]) {
        try {
          fetch(url)
            .then((res) => {
              if (res.status === 200) {
                return res.json();
              }
            })
            .then((data) => {
              dispatch(setPlanetData(data));
            });
        } catch (error) {
          console.error(error);
        }
      } else {
        dispatch(setSelectedPlanet(planetData[name]));
      }
    },
    [dispatch, planetData]
  );

  const handleModalClose = () => dispatch(resetSelectedPlanet());

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="planets">
        <ul className="planets__list">
          {planets.map((planet: Planet) => (
            <Card {...planet} onClick={fetchPlanetData} />
          ))}
        </ul>
      </div>
      {selectedPlanet && (
        <PlanetModal
          open={!!selectedPlanet}
          handleClose={handleModalClose}
          planet={selectedPlanet}
        />
      )}
    </>
  );
}

export default PlanetList;
