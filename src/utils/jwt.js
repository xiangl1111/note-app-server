const jwt = require('jsonwebtoken');

const { JWT_KEY } = process.env;

const generateToken = (payload) => {
  return jwt.sign(payload, JWT_KEY, { expiresIn: '1d' });
};

const validateToken = (token) => {
  return jwt.verify(token, JWT_KEY);
};

module.exports = {
  generateToken,
  validateToken,
};