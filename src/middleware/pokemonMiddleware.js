const statusCodes = require('../constants/httpStatusCodes');
const { RequestError } = require('../errors');

/**
 * @function queryMiddleware
 * @description validator for the express req.query object
 * @param {Object} req express.js request object
 * @param {Object} res express.js response object
 * @param {Function} next express.js next function
 */
exports.queryMiddleware = (req, res, next) => {
  if (Object.values(req.query).some(query => typeof query !== 'string')) {
    throw new RequestError(
      'Req query is invalid',
      statusCodes.badRequest,
      'RequestError',
    );
  }
  next();
};
