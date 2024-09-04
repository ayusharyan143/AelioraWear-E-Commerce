import { Grid, Typography, Paper } from '@mui/material';
import React, { useEffect } from 'react';
import OrderCart from './OrderCart';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../State/Cart/Action';

const orderStatus = [
    { label: "On The Way", value: "on_the_way" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Returned", value: "returned" },
];

const Order = () => {
    const dispatch = useDispatch();
    const { cart, loading, error } = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='px-4 sm:px-6 lg:px-20 py-6'>
            <Typography variant="h4" align="center" gutterBottom>
            Your Purchased Product's
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4} md={3} lg={2.5}>
                    <Paper elevation={3} className='p-4'>
                        <Typography variant="h6" gutterBottom>
                            Filter Orders
                        </Typography>
                        <div className='space-y-4 mt-4'>
                            <Typography variant="subtitle1" gutterBottom>
                                ORDER STATUS
                            </Typography>
                            {orderStatus.map((option) => (
                                <div className='flex items-center' key={option.value}>
                                    <input
                                        defaultValue={option.value}
                                        type="checkbox"
                                        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                        id={option.value}
                                    />
                                    <label
                                        className='ml-3 text-sm text-gray-600'
                                        htmlFor={option.value}
                                    >
                                        {option.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={8} md={9} lg={9.5}>
                    <div className='space-y-6'>
                        {cart?.cartItems?.length ? (
                            cart.cartItems.map((item, index) => (
                                <OrderCart key={index} item={item} />
                            ))
                        ) : (
                            <Typography variant="body1" align="center">
                                No items in cart.
                            </Typography>
                        )}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Order;
