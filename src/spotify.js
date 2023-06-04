export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "cff76213089a4e228206c8bf120d67cb";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getAccessToken = () => {
  //extracting token,token_type,expiretime from url
  const access_token = new URLSearchParams(window.location.hash.substring(1));
  const token_type = new URLSearchParams(window.location.hash.substring());
  const expires_in = new URLSearchParams(window.location.hash.substring());

  return {
    access_token: access_token.get("access_token"),
    token_type: token_type.get("token_type"),
    expires_in: expires_in.get("expires_in"),
  };
};

//creating url for login button
export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
