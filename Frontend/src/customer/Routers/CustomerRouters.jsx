import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../components/pages/HomePage/HomePage';
import Cart from '../components/Cart/Cart';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Product from '../components/Product/Product';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import Checkout from '../components/Checkout/Checkout';
import Order from '../components/Order/Order';
import OrderedDetails from '../components/Order/OrderedDetails';
import PaymentSuccess from '../components/Payment/PaymentSuccess';
import DeliveryAddressForm from '../components/Checkout/DeliveryAddressForm';

const CustomerRouters = () => {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path='/login' element={<HomePage />} />
                <Route path='/register' element={<HomePage />} />
                <Route path='/' element={<HomePage />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/:levelOne/:levelTwo/:levelThree/' element={<Product />} />
                <Route path='/product/:productId' element={<ProductDetails />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/account/order' element={<Order />} />
                <Route path='/account/order/:orderId' element={<OrderedDetails />} />
                <Route path='/payment/:orderId' element={<PaymentSuccess />} />
                <Route path='/checkout/step2' element={<DeliveryAddressForm />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default CustomerRouters;
