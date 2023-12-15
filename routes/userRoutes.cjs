const express = require('express');
const app = express()
const userController = require('../controller/users.cjs');
const userRouter = require('express').Router();

userRouter.get('/getUsers' , userController.getUser)
module.exports = {userRouter}