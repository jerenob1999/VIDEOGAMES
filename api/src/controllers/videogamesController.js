const {Videogame} = require("../db");
const {apiUrl , SOURCE} = require("../utils/variables");
const axios = require("axios")
const { API_KEY } = process.env;


const createNewVideogame = async(name,description,platforms,image,releaseDate,rating) => {
    const newVideogame = await Videogame.create({name,description,platforms,image,releaseDate,rating})
    return newVideogame
};

const getVideogameById = async (id,source) => {
    const videogame = source === SOURCE.API ? (await axios.get(`${apiUrl.apiGames}${id}?key=${API_KEY}`)).data
                                       : await Videogame.findByPk(id)
                                       
    return videogame
}

module.exports = {createNewVideogame, getVideogameById}