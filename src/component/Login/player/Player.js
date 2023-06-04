import React from "react";
import Body from "./body/Body";
import Footer from "./footer/Footer";
import "./Player.css";
import Sidebar from "./sidebar/Sidebar";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar spotify={spotify} />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
};

export default Player;
