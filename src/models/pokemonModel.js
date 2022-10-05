const mongoose = require('mongoose');
const { Schema } = mongoose;

const PokemonStatsSchema = new Schema({
  total: { type: Number, required: true },
  atk: { type: Number, required: true },
  def: { type: Number, required: true },
  sta: { type: Number, required: true },
});

const PokemonCharacteristicsSchema = new Schema({
  legendary: { type: Number, required: true },
  aquireable: { type: Number, required: true },
  spawns: { type: Number, required: true },
  regional: { type: Number, required: true },
  raidable: { type: Number, required: true },
  hatchable: { type: Number, required: true },
  nest: { type: Number, required: true },
  new: { type: Number, required: true },
  nonGettable: { type: Number, required: true },
  futureEvolve: { type: Number, required: true },
});

const PokemonSchema = new Schema({
  name: { type: String, required: true },
  pokedexNumber: { type: Number, required: true },
  image: { type: String, required: true },
  generation: { type: Number, required: true },
  evolutionStage: { type: String },
  evolved: { type: Boolean, required: true },
  familyId: { type: Number },
  crossGen: { type: Boolean, required: true },
  type1: { type: String, required: true },
  type2: { type: String },
  weather1: { type: String, required: true },
  weather2: { type: String },
  stats: { PokemonStatsSchema },
  characteristics: {
    PokemonCharacteristicsSchema,
  },
  cp40: { type: Number, required: true },
  cp39: { type: Number, required: true },
});

const PokemonModel = mongoose.model('Pokemons', PokemonSchema);

module.exports = PokemonModel;
