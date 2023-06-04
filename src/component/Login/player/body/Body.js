import React, { useState } from "react";
import "./Body.css";
import Header from "./header/Header";
import { useDataLayerValue } from "../../../../react-context-api/DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
import SpotifyPlayer from "react-spotify-player";

const Body = ({ spotify }) => {
  const [{ discover_weekly, searchData }, dispatch] = useDataLayerValue();
  const [searchTrack, setSearchTrack] = useState([]);
  const [bool, setBool] = useState(false);

  const chooseSong = (track) => {
    dispatch({
      type: "SET_PLAYING",
      playing: track,
    });
    // Call the playURI method with the Spotify URI of the desired track
    //SpotifyPlayer.playURI(uri);
  };
  const handleGetSearch = (value) => {
    if (value.length === 0) {
      setBool(false);
      return;
    }
    if (value && !bool) {
      setBool(true);
    }
    if (value)
      spotify.searchTracks(value).then((res) => setSearchTrack(res.tracks));
  };
  console.log(searchTrack, bool);
  return (
    <div className="body">
      <Header spotify={spotify} getSearchString={handleGetSearch} />
      {searchTrack && bool ? (
        ""
      ) : (
        <div className="body__info">
          <img src={discover_weekly?.images[0]?.url} alt="" />
          <div className="body__infoText">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>
          </div>
        </div>
      )}
      <div className="body__songs">
        <div className="body_icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {searchTrack && bool
          ? searchTrack?.items?.map((track) => (
              <SongRow track={track} key={track.uri} chooseSong={chooseSong} />
            ))
          : discover_weekly?.tracks.items.map((item) => (
              <SongRow
                track={item.track}
                key={item.track.uri}
                chooseSong={chooseSong}
              />
            ))}
      </div>
    </div>
  );
};

export default Body;
