const statusCodes = require('../constants/httpStatusCodes');
const { RequestError } = require('../errors');

exports.queryMiddleware = (req, res, next) => {
  if (Object.values(req.query).some(query => typeof query !== 'string')) {
    throw new RequestError('Req query is invalid', statusCodes.badRequest);
  }
  next();
};
