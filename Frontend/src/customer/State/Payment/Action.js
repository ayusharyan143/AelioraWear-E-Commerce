import { api } from "../../../config/apiConfig";
import {
  CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, CREATE_PAYMENT_FAILURE,
  UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_FAILURE
} from "./ActionType";

// actions.js
export const createPayment = (orderId) => async (dispatch) => {
    dispatch({ type: CREATE_PAYMENT_REQUEST });

    try {
        // Simulate a successful payment process
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

        // Redirect to the specific order URL after successful checkout
        console.log("create payment order id : " , orderId)
        window.location.href = `http://localhost:3000/account/order/${orderId}`;

        dispatch({ type: CREATE_PAYMENT_SUCCESS, payload: { orderId } });
    } catch (error) {
        dispatch({ type: CREATE_PAYMENT_FAILURE, payload: error.message });
    }
};



export const updatePayment = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_PAYMENT_REQUEST });

    try {
        const { data } = await api.get(`/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);

        console.log("update payment:", data);
        dispatch({ type: UPDATE_PAYMENT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPDATE_PAYMENT_FAILURE, payload: error.message });
    }
};