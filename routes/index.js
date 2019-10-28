const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/user',UserController.getAll);
router.post('/user',UserController.create);
router.get('/user/:id',UserController.getId);
router.put('/user/:id',UserController.update);
router.delete('/user/:id',UserController.remove);

router.post('/order/:id',UserController.newOrder);
router.get('/userOrder/:id',UserController.getUserOrder);
module.exports = router;
