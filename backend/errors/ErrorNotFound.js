class errorNotFound extends Error {
  constructor(message) {
    super(message);
    this.name = 'errorNotFound';
    this.statusCode = 404;
  }
}

module.exports = errorNotFound;
