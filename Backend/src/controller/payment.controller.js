const paymentService = require("../services/payment.service.js")

const createPaymentLink = async(req , res )=>{

    try
    {
        const paymentLink = await paymentService.createPaymentLink(req.params.id)

        return res.status(200).send(paymentLink)
    }
    catch(error)
    {
        return res.status(500).send(error.meessage)
    }
}

const updatePaymentInformation = async(req , res )=>{

    try
    {
        const paymentLink = await paymentService.updatePaymentInformation(req.query)

        return res.status(200).send({message:"payment information updated" , status: true})
    }
    catch(error)
    {
        return res.status(500).send(error.meessage)
    }
}

module.exports = {createPaymentLink , updatePaymentInformation }