const jwt = require('jsonwebtoken');
const { SECRET } = require('./vars');

module.exports.generateJWT = (payload) => jwt.sign({ _id: payload }, SECRET, { expiresIn: '7d' });

module.exports.checkJWT = (token) => jwt.verify(token, SECRET);
