const express = require('express')
const { login, register } = require('../controllers/userController')

const userRouter = express.Router()

userRouter.post('/login', login)            // api/users/login
userRouter.post('/register', register)      // api/users/register

module.exports = userRouter