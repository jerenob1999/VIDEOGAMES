import { ACTION_TYPES } from "./variables";
const { GET_VIDEOGAME_DETAIL, GET_VIDEOGAMES, CLEAN_DETAIL, GET_GENRES, ADD_GENRES } =
  ACTION_TYPES;

const initialState = {
  videogames: [],
  videogameDetail: {},
  genres: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAME_DETAIL:
      return { ...state, videogameDetail: action.payload };


    case GET_GENRES:
      return { ...state, genres: action.payload };

    case GET_VIDEOGAMES:
      return { ...state, videogames: action.payload };

    case CLEAN_DETAIL:
      return { ...state, videogameDetail: action.payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
