import React from "react";
import "./SideBar.css";
import SideBarOption from "./sidebaroption/SideBarOption";
import HomeIcon from "@material-ui/icons/Home";

import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../../../../react-context-api/DataLayer";
const Sidebar = ({ spotify }) => {
  const [{ playLists }] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SideBarOption title="Home" Icon={HomeIcon} />
      <SideBarOption title="Search" Icon={SearchIcon} spotify={spotify} />
      <SideBarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playLists?.map((playList) => (
        <SideBarOption title={playList.name} />
      ))}
    </div>
  );
};

export default Sidebar;
