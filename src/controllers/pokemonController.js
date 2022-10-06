const pokemonService = require('../services/pokemonService.js');
const statusCodes = require('../constants/httpStatusCodes.js');

/**
 * @function getPokemons
 * @description manage request to the DB
 * @param {Object} req express.js request object
 * @param {Object} res express.js response object
 * @param {Function} next express.js next function
 */
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
