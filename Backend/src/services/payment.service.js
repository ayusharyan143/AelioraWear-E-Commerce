const razorpay = require("../config/razorpayClient.js")
const orderService = require("../services/order.service.js")


const createPaymentLink = async(orderId)=>{

    try
    {
        const order = await orderService.findOrderById(orderId)

        const paymentLinkeRequest={
            amount: order.totalPrice*100 , 
            currency: 'INR',
            customer:{
                name: order.user.firstName+" "+order.user.lastName,
                contact: order.user.mobile,
                email:  order.user.email,
            },
            notify:{
                sms:true,
                email:true,
            },
            reminder_enable: true,
            callback_url: `http://localhost:3000/payment/${orderId}`,
            callback_method: 'get'

        };

        const paymentLink = await razorpay.paymentLinke.create(paymentLinkeRequest);

        const paymentLinkId = paymentLink.id;
        const payment_link_url = paymentLink.short_url ; 

        const resData = {
            paymentLinkId,
            payment_link_url,
        }

        return resData
    }
    catch(error)
    {
        throw new Error(error.message)
    }

}

const updatePaymentInformation = async (reqData)=>{

    const paymentId = reqData.payment_id ; 
    const orderId = reqData.order_id ; 

    try
    {
        const order = await orderService.findOrderById(orderId)

        const payment = await razorpay.payments.fetch(paymentId)

        if (payment.status === 'captured') {
            order.paymentDetails.paymentId; 
            order.paymentDetails.status = 'COMPLETED'; 
            order.orderStatus = 'PLACED'; 

            await order.save();
        };

        const resData = {message: "Your order is placed" , success:true}

        return resData 

    }
    catch(error)
    {
        throw new Error(error.message)
    }
}


module.exports = { createPaymentLink , updatePaymentInformation }


