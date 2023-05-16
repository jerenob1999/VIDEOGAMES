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
  SET_ORDER,
} = ACTION_TYPES;

const initialState = {
  videogames: [],
  videogameDetail: {},
  genres: [],
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

    case SET_ORDER:
      return {
        ...state,
        order: {
          ...state.order,
          optionSelected: action.payload,
        },
      };

    case CLEAN_DETAIL:
      return { ...state, videogameDetail: action.payload };

    case GET_VIDEOGAMES_BY_SOURCE:
      let videogamesBySource;
      if (state.source === "API")
        videogamesBySource = state.videogames.filter(
          (game) => game.created == false
        );
      if (state.source === "CREATED")
        videogamesBySource = state.videogames.filter(
          (game) => game.created == true
        );
      if (state.source === "ALL") videogamesBySource = state.videogames;
      return {
        ...state,
        filteredVideogames: videogamesBySource,
      };

    case SET_SOURCE:
      return {
        ...state,
        source: action.payload,
      };

    case ORDER_VIDEOGAMES:
      if (action.payload === "RATING UP")
        return { ...state, videogames: [...state.videogames].sort((a, b) => a.rating - b.rating) };
      if (action.payload === "RATING DOWN")
        return { ...state, videogames: [...state.videogames].sort((a,b) => b.rating - a.rating)};
      if (action.payload === "LETTER UP")
        return {...state, videogames: [...state.videogames].sort((a, b) => a.name.localeCompare(b.name))};
      if (action.payload === "LETTER DOWN")
        return {...state, videogames: [...state.videogames].sort((a, b) => b.name.localeCompare(a.name))}
      if (action.payload === "DEFAULT")
         return {...state}
      

    default:
      return { ...state };
  }
};

export default rootReducer;
