import { ACTION_TYPES } from "./variables";
const {
  GET_VIDEOGAME_DETAIL,
  GET_VIDEOGAMES,
  CLEAN_DETAIL,
  GET_GENRES,
  FILTER_VIDEOGAMES,
  GET_VIDEOGAMES_BY_NAME,
  ORDER_VIDEOGAMES,
  GET_VIDEOGAMES_BY_SOURCE,
  SET_SOURCE,
} = ACTION_TYPES;

const initialState = {
  videogames: [],
  videogameDetail: {},
  genres: [],
  order: "",
  source: "",
  filteredVideogames: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAME_DETAIL:
      return { ...state, videogameDetail: action.payload };

    case GET_GENRES:
      return { ...state, genres: action.payload };

    case GET_VIDEOGAMES:
      return { ...state, videogames: action.payload };

    case FILTER_VIDEOGAMES:
      const filteredVideogames = state.videogames.filter((game) =>
        action.payload.includes(game.genres.includes)
      );
      return { ...state, videogames: filteredVideogames };

    case GET_VIDEOGAMES_BY_NAME:
      return { ...state, videogames: action.payload };

    case CLEAN_DETAIL:
      return { ...state, videogameDetail: action.payload };
      

    case GET_VIDEOGAMES_BY_SOURCE:
      let videogamesBySource 
      if (state.source === "API") videogamesBySource = state.videogames.filter((game) => game.created == false)
      if (state.source === "CREATED") videogamesBySource = state.videogames.filter((game) => game.created == true);
      if (state.source === "") videogamesBySource = state.videogames
      return {
        ...state,
        filteredVideogames: videogamesBySource
      };

    case SET_SOURCE:
      return {
        ...state, source:action.payload
      }

    case ORDER_VIDEOGAMES:
      let orderValue = "";
      const orderVideogames = [...state.videogames].sort((a, b) => {
        if (a.rating > b.rating) {
          orderValue = "Ascendiente";
          return "Ascendiente" === action.payload ? 1 : -1;
        }
        if (a.rating < b.rating) {
          orderValue = "Descendiente";
          return "Descendiente" === action.payload ? 1 : -1;
        }
        return 0;
      });
      return { ...state, videogames: orderVideogames, order: orderValue };

    default:
      return { ...state };
  }
};

export default rootReducer;
