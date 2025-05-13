const jwt = require('jsonwebtoken');

const generateToken = (usuario) => {
  const payload = {
    id: usuario.id,
    rol: usuario.rol,
    email: usuario.email
  };

  return jwt.sign(payload, 'secreto_super_seguro', { expiresIn: '2h' }); // 👈 cambia a variable de entorno en producción
};

module.exports = generateToken;
