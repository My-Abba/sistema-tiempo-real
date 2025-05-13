const express = require('express');
const { registro, login } = require('../controllers/authController');
const router = express.Router();
const { validateRegistration } = require('../middlewares/validationMiddleware');
router.post('/registro', validateRegistration, registro);
 
router.post('/registro', registro);
router.post('/login', login);
 
module.exports = router;