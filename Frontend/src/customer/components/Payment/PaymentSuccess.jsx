import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Alert, AlertTitle, Grid } from '@mui/material';
import { updatePayment } from '../../State/Payment/Action';
import OrderTraker from '../Order/OrderTracker';
import AddressCard from '../AddressCard/AddressCard'; // Corrected spelling
import { getOrderById } from '../../State/Order/Action';

const PaymentSuccess = () => {
    const [paymentId, setPaymentId] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('');
    const { orderId } = useParams();
    const dispatch = useDispatch();
    const { order } = useSelector(store => store.order); // Adjusted to correct path

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setPaymentId(urlParams.get('razorpay_payment_id') || '');
        setPaymentStatus(urlParams.get('razorpay_payment_link_status') || '');
    }, []);

    useEffect(() => {
        if (paymentId) {
            const data = { orderId, paymentId };
            dispatch(getOrderById(orderId)); // Ensure order details are fetched
            dispatch(updatePayment(data)); // Update payment status
        }
    }, [paymentId, orderId, dispatch]);

    return (
        <div className='px-2 lg:px-36'>
            <div className='flex flex-col justify-center items-center'>
                <Alert
                    variant='filled'
                    severity='success'
                    sx={{ mb: 6, width: "fit-content" }}
                >
                    <AlertTitle>Payment Success</AlertTitle>
                    Congratulations! Your order has been placed.
                </Alert>
            </div>

            <OrderTraker activeStep={1} />

            <Grid container className='space-y-5 py-5 pt-20'>
                {order?.orderItems?.map((item) => (
                    <Grid container item key={item.product._id} sx={{ alignItems: "center", justifyContent: "space-between" }}>
                        <Grid item xs={6}>
                            <div className='flex items-center'>
                                <img
                                    className='w-[5rem] h-[5rem] object-cover object-top'
                                    src={item.product.image} // Ensure image property exists
                                    alt={item.product.title}
                                />
                                <div className='ml-5 space-y-2'>
                                    <p>{item.product.title}</p>
                                    <div className='opacity-50 text-xs font-semibold space-x-1'>
                                        <span>Size: {item.size}</span>
                                    </div>
                                    <p>Seller: {item.product.brand}</p>
                                    <p>₹{item.price}</p> {/* Added currency symbol */}
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6}> {/* Changed to xs={6} for consistent layout */}
                            <AddressCard address={order?.shippingAddress} />
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default PaymentSuccess;
