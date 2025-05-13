const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const { subirArchivo, listarArchivos, descargarArchivo } = require('../controllers/archivo.controller');

// Configuración de multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Endpoints
router.post('/archivos', upload.single('archivo'), subirArchivo);
router.get('/archivos', listarArchivos);
router.get('/archivos/:nombreArchivo', descargarArchivo);

module.exports = router;
