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
    return {type: ACTION_TYPES.CLEAN_DETAIL, payload:{}}
}

export const getGenres = () => {
  return async function (dispatch) {
    const genres = (await axios.get(`${ENDPOINTS.GENRES}`)).data;
    dispatch({type: ACTION_TYPES.GET_GENRES, payload: genres})
  }
}