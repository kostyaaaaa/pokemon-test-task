const { getCorrectFilters } = require('./pokemonUtils');

describe('getCorrectFilters', () => {
  it('should transform filters to the correct format', () => {
    const filters = getCorrectFilters({ maxAtk: '150', search: 'a' });
    expect(filters).toEqual({
      $or: [
        {
          name: {
            $regex: 'a',
            $options: 'i',
          },
        },
        {
          type1: {
            $regex: 'a',
            $options: 'i',
          },
        },
        {
          type2: {
            $regex: 'a',
            $options: 'i',
          },
        },
        {
          weather1: {
            $regex: 'a',
            $options: 'i',
          },
        },
        {
          weather2: {
            $regex: 'a',
            $options: 'i',
          },
        },
      ],
      'stats.atk': {
        $lt: '150',
      },
    });
  });
});
