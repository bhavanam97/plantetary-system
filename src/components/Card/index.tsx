import { useMemo } from "react";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "../Button";
import { Planet } from "../../pages/planetSlice";

import "./Card.scss";

type CardProps = Planet & {
  url: string;
  onClick: (name: string, url: string) => void;
};

export const Card = ({
  name,
  rotation_period,
  diameter,
  climate,
  surface_water,
  url,
  onClick,
}: CardProps) => {
  const editText = useMemo(
    () => `A day ${rotation_period} hours long`,
    [rotation_period]
  );
  const handlePlanetClick = () => onClick(name, url);
  return (
    <div className="planet-card">
      <div className="planet-card__title-section">
        <div className="title title__container">
          <img className="title__img" src="/images/planet.jpg" alt="planet" />
          <div className="title__desc">
            <div className="title__name">{name}</div>
            <div className="title__timeline">{editText}</div>
          </div>
        </div>
        <div className="planet-card__more-icon">
          <MoreIcon sx={{ fontSize: 15, fill: "#717171" }} />
        </div>
      </div>
      <div className="planet-card__description">
        <div className="description">
          <div className="label">Diameter</div>
          <div className="value">{diameter}</div>
        </div>
        <div className="description">
          <div className="label">Water %</div>
          <div className="value">{surface_water}</div>
        </div>
        <div className="description">
          <div className="label">Climate</div>
          <div className="value">{climate?.split(",")?.[0]}</div>
        </div>
      </div>
      <div className="planet-card__button">
        <Button label="Invite to Apply" onClick={handlePlanetClick} />
      </div>
    </div>
  );
};
