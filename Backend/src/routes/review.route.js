const express = require("express")
const router = express.Router()


const reviewController = require("../controller/review.controller.js")
const authenticate = require("../middelware/authenticate.js")

router.post("/create" , authenticate , reviewController.createReview)
router.put("/product/:productId" , authenticate , reviewController.getAllReview)


module.exports = router ; 