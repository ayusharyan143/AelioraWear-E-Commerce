import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS, } from "./ActionType"
import { api } from "../../../config/apiConfig"


// GET_ORDER_HISTORY_FAILURE, GET_ORDER_HISTORY_REQUEST, GET_ORDER_HISTORY_SUCCESS


export const createOrder=(reqData)=> async (dispatch)=>{

    dispatch({type: CREATE_ORDER_REQUEST})

    try
    {

        const { data } = await api.post(`/api/orders/`,reqData.address)
        console.log("API Response Data:", data);

        if( data._id)
        {
            reqData.navigate({search: `step=3&order_id=${data._id}`})

        }

        console.log("created order By id: " , data)

        dispatch({type: CREATE_ORDER_SUCCESS,payload:data})
    }
    catch(error) {
    console.error("Order creation failed:", error);
    dispatch({type: CREATE_ORDER_FAILURE, payload: error.message});
}

}


export const getOrderById = (orderId) => async (dispatch) => {
    dispatch({ type: GET_ORDER_BY_ID_REQUEST });

    try {
        const { data } = await api.get(`/api/orders/${orderId}`);
        console.log("Order by ID:", data);

        dispatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data });
        return data; // Ensure this is returned
    } catch (error) {
        console.error("Order Get failed:", error);
        dispatch({ type: GET_ORDER_BY_ID_FAILURE, payload: error.message });
        throw error; // Optionally re-throw the error to handle it in the component
    }
};


// export const getOrderHistory = (reqData) => async (dispatch,getState) => {
//     try
//     {
//         dispatch({tyep: GET_ORDER_HISTORY_REQUEST})

//         const config = { headers: { Authorization: `Bearer ${reqData.jwt}`}}

//         const {data} = await api.get(`/api/orders/user`)
//         console.log(" Order History : " , data )

//         dispatch({ type: GET_ORDER_HISTORY_SUCCESS , payload: data})
//     }
//     catch(error)
//     {
        
//         dispatch({ type: GET_ORDER_HISTORY_FAILURE , payload: error.response && error.response.data.message ? error.response.data.message : error.message })
//     }
// }