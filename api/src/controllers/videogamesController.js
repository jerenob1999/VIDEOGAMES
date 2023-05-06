const {Videogame} = require("../db")

const createNewVideogame = async(name,description,platforms,image,releaseDate,rating) => {
    const newVideogame = await Videogame.create({name,description,platforms,image,releaseDate,rating})
    return newVideogame
}

module.exports = {createNewVideogame}