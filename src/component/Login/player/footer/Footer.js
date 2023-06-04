import React, { useEffect, useState } from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import "./Footer.css";
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from "../../../../react-context-api/DataLayer";
import SpotifyPlayer from "react-spotify-player";
import SpotifyWebApi from "spotify-web-api-node";
//import SpotifyPlayer1 from "./SpotifyPlayer";
import Tooltip from "@mui/material/Tooltip";
const SpotifyApi = new SpotifyWebApi({
  clientId: "cff76213089a4e228206c8bf120d67cb",
});
const Footer = ({ spotify }) => {
  const [{ playing, token, item }, dispatch] = useDataLayerValue();
  const [play, setPlay] = useState(false);
  const size = {
    width: "100%",
    height: 80,
  };
  const view = "coverart";
  const theme = "black";
  console.log(playing, item);
  useEffect(() => {}, [spotify]);

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumlogo"
          src={playing?.album?.images[0]?.url}
          alt={playing?.name}
        />
        {playing ? (
          <div className="footer__songInfo">
            <h4>{playing?.name}</h4>
            <p>{playing?.artists?.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>

      <div className="footer__center">
        <SpotifyPlayer
          className="spotifyPlayer"
          view={view}
          theme={theme}
          uri={playing.uri}
          autoPlay={true}
          size={size}
        />
        {/* <SpotifyPlayer track={playing} token={token} /> */}

        {/* <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        {playing ? (
          <PauseCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        ) : (
          <PlayCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        )}
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" /> */}
      </div>
      <Tooltip title="This is only UI not a functionality">
        <div className="footer__right">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item xs>
              <Slider aria-labelledby="continuous-slider" />
            </Grid>
          </Grid>
        </div>
      </Tooltip>
    </div>
  );
};

export default Footer;
