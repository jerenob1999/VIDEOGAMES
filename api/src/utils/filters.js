const videogamesFilter = (videogames) => {
  let games = Array.isArray(videogames) ? videogames : [videogames];
  return games.map((videogame) => {
    return {
      id: videogame.id,
      name: videogame.name,
      description: videogame.description,
      platforms: videogame.platforms,
      image: videogame.background_image,
      rating: videogame.rating,
      releaseDate: videogame.released,
      created: false,
      genre: videogame.genres.map(genre => {
        return {
          id:genre.id,
          name:genre.name
        }
      })
    };
  });
};


const genresFilter = (genres) => {
  return genres.map(genre => {
    return {
      id:genre.id,
      name:genre.name
    }
  })
}
module.exports = { videogamesFilter, genresFilter };
