import MoreIcon from "@mui/icons-material/MoreHoriz";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";

import "./Heading.scss";

export const Heading = () => {
  const planetList = useSelector((state: AppState) => state.planet.planetList);

  return (
    <div className="app-heading">
      <div className="app-heading__text-container">
        <h2 className="app-heading__label">Planets</h2>
        {planetList && (
          <span className="app-heading__count">{planetList.length}</span>
        )}
      </div>
      <div className="app-heading__more-icon">
        <MoreIcon sx={{ fontSize: 15, fill: "#0B0E1E" }} />
      </div>
    </div>
  );
};
