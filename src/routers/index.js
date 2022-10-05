const express = require("express");

const router = express.Router();

const pokemonRouter = require("./pokemonRouter");

router.use("/api/pokemons", pokemonRouter);

module.exports = router;
