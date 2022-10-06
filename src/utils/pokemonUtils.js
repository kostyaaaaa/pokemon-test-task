const minMaxFilters = [
  'maxAtk',
  'minAtk',
  'minTotal',
  'maxTotal',
  'minDef',
  'maxDef',
  'minSta',
  'maxSta',
];

/**
 * @function getCorrectFilters
 * @description transform provided filters to the correct format for the mongodb model filters
 * @param {Object} queryFilters
 * @returns {Object} correctFilters
 */
exports.getCorrectFilters = queryFilters => {
  const correctFilters = { ...queryFilters };
  Object.keys(queryFilters).forEach(filter => {
    if (filter === 'search') {
      correctFilters['$or'] = [
        {
          name: {
            $regex: queryFilters[filter],
            $options: 'i',
          },
        },
        {
          type1: {
            $regex: queryFilters[filter],
            $options: 'i',
          },
        },
        {
          type2: {
            $regex: queryFilters[filter],
            $options: 'i',
          },
        },
        {
          weather1: {
            $regex: queryFilters[filter],
            $options: 'i',
          },
        },
        {
          weather2: {
            $regex: queryFilters[filter],
            $options: 'i',
          },
        },
      ];
      delete correctFilters[filter];
    }
    if (minMaxFilters.includes(filter)) {
      const operator = filter.startsWith('max') ? 'max' : 'min';
      const [, param] = filter.split(operator);
      const query = operator === 'max' ? '$lt' : '$gt';
      correctFilters[`stats.${param.toLowerCase()}`] = {
        [query]: queryFilters[filter],
      };
      delete correctFilters[filter];
    }
  });
  return correctFilters;
};
