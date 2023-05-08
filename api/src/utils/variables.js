const apiUrl = Object.freeze({
  apiGames: "https://api.rawg.io/api/games",
  apiGenre:"https://api.rawg.io/api/genres",
});

const SOURCE = Object.freeze({
  API: "API_SOURCE",
  BDD: "BDD_SOURCE"
})

const ERROR = Object.freeze({
  POST:"MISSING DATA",
  GET_ID:"NOT A VALID ID",
  QUERY:"GAME NOT FOUND"
})

module.exports = {apiUrl, SOURCE, ERROR}
