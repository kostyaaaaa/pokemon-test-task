const { RequestError } = require('../errors');
const { queryMiddleware } = require('./pokemonMiddleware');

describe('queryMiddleware', () => {
  it('should call next function if all queries valid', () => {
    const mockedNext = jest.fn();
    const req = { query: { limit: '15', page: '1' } };
    const res = {};
    queryMiddleware(req, res, mockedNext);
    expect(mockedNext).toHaveBeenCalled();
  });
  it('should throw Error if at least one query is invalid', () => {
    const mockedNext = jest.fn();
    const req = { query: { limit: '15', page: '1', invalidQuery: [[]] } };
    const res = {};
    const wrapper = () => {
      queryMiddleware(req, res, mockedNext);
    };
    expect(wrapper).toThrow(RequestError);
    expect(mockedNext).not.toHaveBeenCalled();
  });
});
