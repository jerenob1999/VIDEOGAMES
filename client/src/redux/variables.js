export const ACTION_TYPES = Object.freeze({
  GET_VIDEOGAME_DETAIL: "GET_VIDEOGAME_DETAIL",
  GET_VIDEOGAMES: "GET_VIDEOGAMES",
  CLEAN_DETAIL: "CLEAN_DETAIL",
  GET_GENRES: "GET_GENRES",
  ADD_GENRES: "ADD_GENRES",
  FILTER_VIDEOGAMES: "FILTER_VIDEOGAMES",
  GET_VIDEOGAMES_BY_NAME: "GET_VIDEOGAMES_BY_NAME"
});

export const ENDPOINTS = Object.freeze({
  VIDEOGAMES: "http://localhost:3001/videogames/",
  GENRES: "http://localhost:3001/genres",
  VIDEOGAMES_BY_NAME: "http://localhost:3001/videogames?name="
});
