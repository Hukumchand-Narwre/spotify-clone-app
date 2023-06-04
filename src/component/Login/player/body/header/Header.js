import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, Tooltip } from "@material-ui/core";
import { useDataLayerValue } from "../../../../../react-context-api/DataLayer";

const Header = ({ spotify, getSearchString }) => {
  const [{ user, token }, dispatch] = useDataLayerValue();

  const handleClick = (e) => {
    const value = e.target.value;
    getSearchString(value);
  };
  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
    window.location.reload();
  };
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search For Artists, Songs or Podcasts"
          onChange={handleClick}
        />
      </div>
      <Tooltip title="Click To Logout">
        <div className="header__right" onClick={logoutHandler}>
          <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
          <h4>{user?.display_name}</h4>
        </div>
      </Tooltip>
    </div>
  );
};

export default Header;
