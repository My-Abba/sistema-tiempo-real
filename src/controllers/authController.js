const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../models');
 
exports.registro = async (req, res) => {
  const { nombre, email, contraseña, rol } = req.body;
  const hash = await bcrypt.hash(contraseña, 10);
  const user = await Usuario.create({ nombre, email, contraseña: hash, rol });
  res.status(201).json({ id: user.id });
};
 
exports.login = async (req, res) => {
  const { email, contraseña } = req.body;
  const user = await Usuario.findOne({ where: { email } });
  if (!user || !await bcrypt.compare(contraseña, user.contraseña)) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }
  const token = jwt.sign(
    { id: user.id, rol: user.rol },
    process.env.JWT_SECRET,
    { expiresIn: '2h' }
  );
  res.json({ token });
};