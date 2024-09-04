import React, { useEffect, useState } from 'react';
import AddressCard from '../AddressCard/AddressCard';
import { Button, CircularProgress } from '@mui/material';
import CartItem from '../Cart/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../../State/Order/Action';
import { useLocation } from 'react-router-dom';
import { createPayment } from '../../State/Payment/Action';

const OrderSummary = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { order, loading, error } = useSelector(store => store.order); // Assume order contains loading and error states
    const [orderId, setOrderId] = useState(null);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const id = searchParams.get("order_id");
        if (id) {
            setOrderId(id);
            dispatch(getOrderById(id));
        }
    }, [location.search, dispatch]);

    const handleCheckout = () => {
        if (orderId) {
            dispatch(createPayment(orderId));
        }
    };

    if (loading) return <CircularProgress />;
    if (error) return <p>Error loading order details. Please try again later.</p>;

    return (
        <div>
            <div className='p-5 shadow-lg rounded-md border mb-8 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16'>
                <AddressCard address={order?.shippingAddress} />
            </div>

            <div>
                <div className="container mx-auto p-4 lg:grid lg:grid-cols-3 lg:gap-6">
                    {/* Cart Items Section */}
                    <div className="lg:col-span-2 space-y-4">
                        {order?.orderItems.map((item) => (
                            <CartItem key={item._id} item={item} className="mb-4" />
                        ))}
                    </div>

                    {/* Price Details Section */}
                    <div className="mt-10 lg:mt-0 lg:sticky lg:top-0 lg:h-[100vh] lg:pl-4 lg:pr-4">
                        <div className="border p-4 rounded-lg shadow-sm">
                            <p className="uppercase font-bold text-gray-700 mb-4">Price Details</p>
                            <hr />
                            <div className="space-y-3 font-semibold mt-4 mb-5">
                                <div className="flex justify-between py-2 text-black">
                                    <span>Price</span>
                                    <span>₹{order?.totalPrice}</span>
                                </div>
                                <div className="flex justify-between py-2">
                                    <span>Discount</span>
                                    <span className="text-green-600">-₹{order?.discount}</span>
                                </div>
                                <div className="flex justify-between py-2">
                                    <span>Delivery Charge</span>
                                    <span className="text-green-600">Free</span>
                                </div>
                                <div className="flex justify-between py-2 font-bold text-lg">
                                    <span>Total Amount</span>
                                    <span className="text-green-600">₹{order?.totalDiscountedPrice}</span>
                                </div>
                            </div>

                            <Button
                                className="w-full mt-6"
                                variant="contained"
                                sx={{
                                    px: "2.5rem",
                                    py: "0.7rem",
                                    bgcolor: "#9155fd",
                                    color: "#fff",
                                    textTransform: "uppercase",
                                    fontWeight: "bold",
                                    '&:hover': { bgcolor: "#7d44e0" },
                                }}
                                onClick={handleCheckout}
                            >
                                Proceed to Checkout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
