const pokemonController = require('./pokemonController');
const pokemonService = require('../services/pokemonService');

describe('getPokemons', () => {
  const mockedNext = jest.fn();
  const mockedJSON = jest.fn();
  const req = { query: {} };
  const res = { status: () => ({ json: mockedJSON }) };
  const mockedError = new Error('mocked error');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call next function with error', () => {
    const spy = jest.spyOn(pokemonService, 'getPokemons');
    spy.mockImplementation(() => {
      throw mockedError;
    });

    pokemonController.getPokemons(req, res, mockedNext);
    expect(mockedNext).toHaveBeenCalledWith(mockedError);
    expect(mockedJSON).not.toHaveBeenCalled();
    spy.mockRestore();
  });
  it('should call json function and return response', async () => {
    const spy = jest.spyOn(pokemonService, 'getPokemons');
    spy.mockImplementation(() => {
      return [];
    });

    await pokemonController.getPokemons(req, res, mockedNext);
    expect(mockedNext).not.toHaveBeenCalled();
    expect(mockedJSON).toHaveBeenCalledWith([]);
    spy.mockRestore();
  });
});
