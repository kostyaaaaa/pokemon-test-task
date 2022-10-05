const Pokemon = require('../models/pokemonModel');
const { getCorrectFilters } = require('../utils/pokemonUtils');

const DEFAULT_LIMIT = 50;
const DEFAULT_PAGE = 1;

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
