const errorHandler = require('./errorHandler');
const { RequestError } = require('./errors');

describe('errorHandler', () => {
  const mockedError = new RequestError('server error', 500, 'RequestError');
  const mockedJSON = jest.fn();
  const req = {};
  const res = { status: () => ({ json: mockedJSON }) };
  const mockedNext = jest.fn();
  const originalConsoleError = console.error;
  const mockedConsoleError = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    console.error = mockedConsoleError;
  });

  afterEach(() => {
    console.error = originalConsoleError;
  });

  it('should call console.error method', () => {
    errorHandler(mockedError, req, res, mockedNext);
    expect(mockedConsoleError).toHaveBeenCalled();
  });
  it('should call res.json with the default error data if provided error is empty', () => {
    errorHandler({}, req, res, mockedNext);
    expect(mockedJSON).toHaveBeenCalledWith({
      error: 'Error',
      message: 'Internal Server Error',
    });
  });
  it('should call res.json with the error data', () => {
    errorHandler(mockedError, req, res, mockedNext);
    expect(mockedJSON).toHaveBeenCalledWith({
      error: 'RequestError',
      message: 'server error',
    });
  });
});
