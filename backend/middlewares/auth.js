const { checkJWT } = require('../helpers/jwt');
const Unauthorized = require('../errors/Unauthorized');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new Unauthorized('Необходима авторизация'));
  } else {
    const token = authorization.replace('Bearer ', '');
    let payload;

    try {
      payload = checkJWT(token);
    } catch (err) {
      next(new Unauthorized('Необходима авторизация'));
    }

    req.user = payload; // записываем пейлоуд в объект запроса
  }
  next(); // пропускаем запрос дальше
};
