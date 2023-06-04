import { useEffect } from "react";
import "./App.css";
import Login from "./component/Login/Login";
import { getAccessToken } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./component/Login/player/Player";
import { useDataLayerValue } from "./react-context-api/DataLayer";
import MyModal from "./component/Modal";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  useEffect(() => {
    //getting token,token_type,expires in time from url
    const hash = getAccessToken();
    window.location.hash = "";

    const access_token = hash.access_token;
    if (access_token) {
      dispatch({ type: "SET_TOKEN", token: access_token });
      spotify.setAccessToken(access_token);
      spotify.getMe().then((user) => {
        dispatch({ type: "SET_USER", user });
      });

      spotify.getUserPlaylists().then((playLists) => {
        console.log(playLists);
        dispatch({
          type: "SET_PLAYLISTS",
          playLists: playLists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcKIwYZctgjCh").then((response) => {
        console.log(response);
        dispatch({
          type: "SET_DISCOVERWEEKLY",
          discover_weekly: response,
        });
      });
      spotify
        .getMyCurrentPlaybackState("37i9dQZEVXcKIwYZctgjCh")
        .then((res) => {
          console.log(res, "⛔⛔");
        });
    }
  }, []);

  return (
    <div className="app">
      <MyModal />
      {token ? <Player spotify={spotify} token={token} /> : <Login />}
    </div>
  );
}

export default App;
