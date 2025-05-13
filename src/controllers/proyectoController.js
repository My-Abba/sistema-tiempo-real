const { Proyecto, Usuario } = require('../models');
const { emitInvitation } = require('../sockets/socket');
 
exports.create = async (req, res) => {
  const proyecto = await Proyecto.create({
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    usuario_id: req.user.id
  });
  res.status(201).json(proyecto);
};
 
exports.list = async (req, res) => {
  const page  = parseInt(req.query.page)  || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;
  const data = await Proyecto.findAndCountAll({ offset, limit });
  res.json({ total: data.count, proyectos: data.rows });
};
 
exports.invite = async (req, res) => {
  const proyecto = await Proyecto.findByPk(req.params.id);
  await proyecto.addUsuario(req.body.usuarioId);
  emitInvitation({ proyectoId: proyecto.id, usuarioId: req.body.usuarioId });
  res.json({ message: 'Invitación enviada' });
};