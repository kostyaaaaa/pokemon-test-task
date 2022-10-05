const pokemonService = require('../services/pokemonService.js');
const statusCodes = require('../constants/httpStatusCodes.js');

const getPokemons = async (req, res, next) => {
  try {
    const response = await pokemonService.getPokemons(req.query);
    res.status(statusCodes.ok).json(response);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getPokemons,
};
