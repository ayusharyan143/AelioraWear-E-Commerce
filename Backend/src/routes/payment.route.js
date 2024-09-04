const express = require("express")
const router = express.Router()

const paymentController = require("../controller/payment.controller.js")
const authenticate = require("../middelware/authenticate.js")



router.post("/:id" , authenticate , paymentController.createPaymentLink)
router.get("/" , authenticate , paymentController.updatePaymentInformation)


module.exports = router ; 