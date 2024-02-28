require('dotenv').config();
const { Router } = require('express')
const usersController = require('../controllers/users.controller')

const PORT = process.env.API_PORT;

const router = Router();

router.get('/:id', usersController.read);
router.post('/', usersController.create);

module.exports = router;