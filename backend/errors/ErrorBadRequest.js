class ErrorBadRequest extends Error {
  constructor(message) {
    super(message);
    this.name = 'ErrorBadRequest';
    this.statusCode = 400;
  }
}

module.exports = ErrorBadRequest;
