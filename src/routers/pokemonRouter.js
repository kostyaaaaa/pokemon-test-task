const express = require("express");
const pokemonController = require("../controllers/pokemonController");

const router = new express.Router();

router.get("/", pokemonController.getPokemons);

module.exports = router;
