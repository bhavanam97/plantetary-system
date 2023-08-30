import { Modal as ModalMui, Box } from "@mui/material";
import { useMemo } from "react";
import { Button } from "../Button";
import { Planet } from "../../pages/planetSlice";

type ModalProps = {
  open: boolean;
  handleClose: () => void;
  planet: Planet;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const PlanetModal = ({ open, handleClose, planet }: ModalProps) => {
  const { name, rotation_period, diameter, climate, surface_water } = planet;
  const editText = useMemo(
    () => `A day ${rotation_period} hours long`,
    [rotation_period]
  );
  return (
    <ModalMui
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="planet-card">
          <div className="planet-card__title-section">
            <div className="title title__container">
              <img
                className="title__img"
                src="/images/planet.jpg"
                alt="planet"
              />
              <div className="title__desc">
                <div className="title__name">{name}</div>
                <div className="title__timeline">{editText}</div>
              </div>
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
            <Button label="close" onClick={handleClose} />
          </div>
        </div>
      </Box>
    </ModalMui>
  );
};
