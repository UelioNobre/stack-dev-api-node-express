const { Router } = require('express')
const loginMiddleware = require('../middlewares/login.middleware');
const loginController = require('../controllers/login.controller');

const router = Router();

router.post('/',
  loginMiddleware.checkFieldsEmailPasswordToLogin,
  loginController.logIn,
);

module.exports = router;