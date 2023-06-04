export const initialState = {
  token: null,
  user: null,
  playLists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  searchData: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_PLAYLISTS":
      return { ...state, playLists: action.playLists["items"] };
    case "SET_DISCOVERWEEKLY":
      return { ...state, discover_weekly: action.discover_weekly };
    case "SET_PLAYING":
      return { ...state, playing: action.playing };
    case "SET_ITEM":
      return { ...state, item: action.item };
    case "SET_SEARCH":
      return { ...state, searchData: action.track };
    case "SET_LOGOUT":
      return {
        token: null,
        user: null,
        playLists: [],
        playing: false,
        item: null,
        discover_weekly: null,
        searchData: null,
      };
    default:
      return state;
  }
};

export default reducer;
