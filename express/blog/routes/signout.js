const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin

// GET /signout 登出
router.get('/', checkLogin, function (req, res, next) {
  req.session.user = null
  req.flash('sucess', '登录成功')
  res.redirect('/post')
})

module.exports = router
