const { Archivo } = require('../../models');
const path = require('path');

// ✅ Subir archivo
const subirArchivo = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No se ha subido ningún archivo.' });
    }

    const { tarea_id } = req.body;

    const nuevoArchivo = await Archivo.create({
      nombre: req.file.originalname,
      url: `/uploads/${req.file.filename}`,
      tarea_id: tarea_id || null // Puede ser null si no se asigna
    });

    res.status(201).json({ mensaje: 'Archivo subido exitosamente.', archivo: nuevoArchivo });
  } catch (error) {
    console.error('Error al subir archivo:', error);
    res.status(500).json({ error: 'Error interno al subir archivo.' });
  }
};

// ✅ Obtener archivos (opcionalmente por tarea)
const listarArchivos = async (req, res) => {
  try {
    const { tarea_id } = req.query;

    const archivos = await Archivo.findAll({
      where: tarea_id ? { tarea_id } : {}
    });

    res.status(200).json({ archivos });
  } catch (error) {
    console.error('Error al listar archivos:', error);
    res.status(500).json({ error: 'Error al obtener los archivos.' });
  }
};

// ✅ Descargar archivo (opcional)
const descargarArchivo = async (req, res) => {
  try {
    const { nombreArchivo } = req.params;
    const ruta = path.join(__dirname, '../../uploads', nombreArchivo);
    res.download(ruta);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo descargar el archivo.' });
  }
};

module.exports = {
  subirArchivo,
  listarArchivos,
  descargarArchivo
};
