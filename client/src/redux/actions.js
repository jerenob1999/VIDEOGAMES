import { ACTION_TYPES, ENDPOINTS } from "./variables";
import axios from "axios";

export const getVideogameDetail = (id) => {
  return async function (dispatch) {
    const videoGame = (await axios.get(`${ENDPOINTS.VIDEOGAMES_ID}${id}`)).data[0];
    dispatch({ type: ACTION_TYPES.GET_VIDEOGAME_DETAIL, payload: videoGame });
  };
};

