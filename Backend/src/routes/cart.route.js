const express = require("express")
const router = express.Router()


const cartController = require("../controller/cart.controller.js")
const authenticate = require("../middelware/authenticate.js")


router.get("/" , authenticate , cartController.findUserCart)
router.put("/add" , authenticate , cartController.addItemToCart)


module.exports = router ; 