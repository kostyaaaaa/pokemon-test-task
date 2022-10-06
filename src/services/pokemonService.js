const Pokemon = require('../models/pokemonModel');
const { getCorrectFilters } = require('../utils/pokemonUtils');

const DEFAULT_LIMIT = 50;
const DEFAULT_PAGE = 1;

/**
 * @function getPokemons
 * @description performs request to the mongodb to find pokemons, that fits to the query
 * returns pokemons list, list length
 * @param {Object} query express req.query
 * @returns {Object}
 */
const getPokemons = async query => {
  const { limit, page, ...rest } = query;
  const l = limit || DEFAULT_LIMIT;
  const p = page || DEFAULT_PAGE;
  const filters = getCorrectFilters(rest);

  const pokemons = await Pokemon.find(
    { ...filters },
    {},
    { skip: (p - 1) * l, limit: l, sort: { pokedexNumber: 'asc' } },
  );
  return { length: pokemons.length, data: pokemons };
};

module.exports = {
  getPokemons,
};
