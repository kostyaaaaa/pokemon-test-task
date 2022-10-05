const Pokemon = require('../models/pokemonModel');

const getPokemons = async () => {
  const pokemons = await Pokemon.find();
  return pokemons;
};

module.exports = {
  getPokemons,
};
