const express = require('express');
const router = express.Router();
const { create, list } = require('../controllers/tareaController');
const { authenticate } = require('../middlewares/authMiddleware');
const upload = require('../config/multer');
 
router.post('/', authenticate, upload.single('file'), create);
router.get('/', authenticate, list);
 
module.exports = router;