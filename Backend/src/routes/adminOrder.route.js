const express = require("express")
const router = express.Router()

const orderController = require("../controller/adminOrder.controller.js")
const authenticate = require("../middelware/authenticate.js")


router.get("/" , authenticate , orderController.getAllOrders)
router.put("/:orderId/confirmed" , authenticate , orderController.confirmedOrders)
router.put("/:orderId/ship" , authenticate , orderController.shippOrders)
router.put("/:orderId/deliver" , authenticate , orderController.deliverOrders)
router.put("/:orderId/cancel" , authenticate , orderController.cancelledOrders)
router.delete("/:orderId" , authenticate , orderController.deleteOrders)


module.exports = router ; 