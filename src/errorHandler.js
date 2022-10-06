// global error handler middleware

/**
 * @function errorHandler
 * @description - middleware, used to handle all error's in the application
 * @param {Object} err js Error, or custom error from errors.js
 * @param {Object} req express.js request object
 * @param {Object} res express.js response object
 * @param {Function} next express.js next function
 */
const errorHandler = (err, req, res, next) => {
  console.error('<ERROR HANDLER>', '\nmessage: ', err.message);
  res.status(err.code || 400).json({
    error: err.name || 'Error',
    message: err.message || 'Internal Server Error',
  });
};

module.exports = errorHandler;
