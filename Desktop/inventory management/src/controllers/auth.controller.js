const user = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existing = await user.findOne({ username });
    if (existing) {
      return res.status(409).json({ message: 'username already taken' });
    }

    const hashed = await bcrypt.hash(password, 10);
    const newuser = new user({ username, password: hashed });
    await newuser.save();

    return res.status(201).json({ message: 'user registered successfully' });
  } catch (err) {
    return res.status(500).json({ message: 'internal server error' });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const found = await user.findOne({ username });
    if (!found) {
      return res.status(401).json({ message: 'invalid credentials' });
    }

    const match = await bcrypt.compare(password, found.password);
    if (!match) {
      return res.status(401).json({ message: 'invalid credentials' });
    }

    const token = jwt.sign(
      { userid: found._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.status(200).json({ access_token: token });
  } catch (err) {
    return res.status(500).json({ message: 'login failed' });
  }
};
