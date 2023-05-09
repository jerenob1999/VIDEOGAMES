import { ACTION_TYPES } from "./variables";
const { GET_VIDEOGAME_DETAIL, GET_VIDEOGAMES } = ACTION_TYPES;

const initialState = {
  videogames: [],
  videogameDetail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAME_DETAIL:
      return { ...state, videogameDetail: action.payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
