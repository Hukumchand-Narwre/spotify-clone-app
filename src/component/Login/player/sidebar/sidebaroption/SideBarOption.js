import { Tooltip } from "@material-ui/core";
import React from "react";
import { useDataLayerValue } from "../../../../../react-context-api/DataLayer";
import "./SideBarOption.css";
const SideBarOption = ({ title, Icon, spotify }) => {
  const [{}, dispatch] = useDataLayerValue();
  const handleClick = () => {
    spotify.getMyTopTracks().then((res) =>
      dispatch({
        type: "SET_SEARCH",
        searchData: res,
      })
    );
  };
  console.log(title);
  return (
    <Tooltip title="This is only UI not a functionality">
      <div className="sidebarOption" onClick={handleClick}>
        {Icon && <Icon className="sidebarOption__icon" />}
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}
      </div>
    </Tooltip>
  );
};

export default SideBarOption;
