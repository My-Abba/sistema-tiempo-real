const express = require('express');
const router = express.Router();
const { create, list, invite } = require('../controllers/proyectoController');
const { authenticate } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');
 
router.post('/', authenticate, create);
router.get('/', authenticate, list);
router.post('/:id/invitar',
  authenticate,
  authorize(['admin','miembro']),
  invite
);
 
module.exports = router;