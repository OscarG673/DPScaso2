const express = require('express');
const User = require('./user');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password, name, email } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: true, message: 'El usuario ya existe' });
    }
    const user = new User({ username, password, name, email });
    await user.save();
    res.status(201).json({ error: false, message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: 'Error al registrar el usuario' });
  }
});

module.exports = router;
