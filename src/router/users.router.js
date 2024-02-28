require('dotenv').config();
const { Router } = require('express')
const usersController = require('../controllers/users.controller')

const PORT = process.env.API_PORT;

const router = Router();

router.post('/', usersController.create);
router.get('/:id', usersController.read);
router.put('/:id', usersController.update);
router.delete('/:id', usersController.destroy);

module.exports = router;