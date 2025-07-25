const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const header = req.headers['authorization'];
  if (!header) {
    return res.status(401).json({ message: 'no token provided' });
  }

  const token = header.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'token missing or malformed' });
  }

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data;
    next();
  } catch (err) {
    res.status(401).json({ message: 'invalid token' });
  }
};
