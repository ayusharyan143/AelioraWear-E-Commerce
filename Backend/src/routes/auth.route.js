const express = require("express")
const router = express.Router()

const authController = require('../controller/auth.controller.js')
const authenticate = require("../middelware/authenticate.js")


router.post("/signup" , authController.register)
router.post("/signin" , authController.login)

module.exports = router