var express = require("express");
var router = express.Router();
const User=require('../model/user')
const controller=require('../controller/userconttroler')

router.post('/signup',controller.signup)
router.post('/login',controller.login)


module.exports = router;