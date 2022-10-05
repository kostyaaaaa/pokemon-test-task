const express = require('express');
const pokemonController = require('../controllers/pokemonController');
const { queryMiddleware } = require('../middleware/pokemonMiddleware');

const router = new express.Router();

router.get('/', queryMiddleware, pokemonController.getPokemons);

module.exports = router;
