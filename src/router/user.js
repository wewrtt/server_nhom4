const app = require('express');
const router = app.Router();
const userController = require('../app/controller/userController')
router.post('/findPassword', userController.findPassword);
router.get('/getCookie', userController.getCookie);
router.get('/logout', userController.logout);
router.post('/login', userController.login);
router.post('/registor', userController.registerUser);
module.exports = router;