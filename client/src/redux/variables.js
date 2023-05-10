export const ACTION_TYPES = Object.freeze({
  GET_VIDEOGAME_DETAIL: "GET_VIDEOGAME_DETAIL",
  GET_VIDEOGAMES: "GET_VIDEOGAMES",
  CLEAN_DETAIL: "CLEAN_DETAIL",
  GET_GENRES: "GET_GENRES",
  ADD_GENRES: "ADD_GENRES"
});

export const ENDPOINTS = Object.freeze({
  VIDEOGAMES: "http://localhost:3001/videogames/",
  GENRES: "http://localhost:3001/genres",
});
