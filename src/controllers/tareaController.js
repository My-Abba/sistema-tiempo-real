const { Tarea, Archivo } = require('../models');
const { emitTaskUpdate } = require('../sockets/socket');
 
exports.create = async (req, res) => {
  const tarea = await Tarea.create({
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    estado: req.body.estado,
    proyecto_id: req.body.proyecto_id,
    asignado_a: req.body.asignado_a
  });
 
  if (req.file) {
    await Archivo.create({
      nombre: req.file.filename,
      url: req.file.path,
      tarea_id: tarea.id
    });
  }
 
  emitTaskUpdate(tarea);
  res.status(201).json(tarea);
};
 
exports.list = async (req, res) => {
  const where = {};
  ['estado','proyecto_id','asignado_a']
    .forEach(key => req.query[key] && (where[key] = req.query[key]));
 
  const tareas = await Tarea.findAll({ where });
  res.json(tareas);
};