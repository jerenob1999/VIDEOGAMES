import { ACTION_TYPES, ENDPOINTS } from "./variables";
import axios from "axios";

export const getVideogameDetail = (id) => {
  return async function (dispatch) {
    const videoGame = (await axios.get(`${ENDPOINTS.VIDEOGAMES}${id}`)).data[0];
    dispatch({ type: ACTION_TYPES.GET_VIDEOGAME_DETAIL, payload: videoGame });
  };
};

export const getVideogames = () => {
  return async function (dispatch) {
    const videoGames = (await axios.get(`${ENDPOINTS.VIDEOGAMES}`)).data;
    dispatch({ type: ACTION_TYPES.GET_VIDEOGAMES, payload: videoGames });
  };
};

export const cleanvideogameDetail = () => {
  return { type: ACTION_TYPES.CLEAN_DETAIL, payload: {} };
};

export const getGenres = () => {
  return async function (dispatch) {
    const genres = (await axios.get(`${ENDPOINTS.GENRES}`)).data;
    dispatch({ type: ACTION_TYPES.GET_GENRES, payload: genres });
  };
};

export const filterVideogames = (option) => {
  return { type: ACTION_TYPES.FILTER_VIDEOGAMES, payload: option };
};

export const orderVideogames = (order) => {
  return { type: ACTION_TYPES.ORDER_VIDEOGAMES, payload: order};
};


export const getVideogamesByName = (name) => {
  return async function (dispatch) {
    const gamesByName = (
      await axios.get(`${ENDPOINTS.VIDEOGAMES_BY_NAME}${name}`)
    ).data;
    dispatch({
      type: ACTION_TYPES.GET_VIDEOGAMES_BY_NAME,
      payload: gamesByName,
    });
  };
};

export const filterBySource = (source) => {
  return { type: ACTION_TYPES.GET_VIDEOGAMES_BY_SOURCE, payload: source };
};

export const setSource = (source) => {
  return { type: ACTION_TYPES.SET_SOURCE, payload: source };
};

export const setOrder = (order) => {
  return function (dispatch) {
    dispatch({type: ACTION_TYPES.SET_ORDER, payload: order})
  }
}

export const filterByGenre = (genre) => {
  return {type: ACTION_TYPES.GET_VIDEOGAMES_BY_GENRE, payload: genre}
}

export const resetFilters = (defaultVideogames) => {
  return function (dispatch) {
    dispatch({type: ACTION_TYPES.RESET_FILTERS, payload: defaultVideogames})
  }
  
}