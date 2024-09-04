import { api } from "../../../config/apiConfig"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"




export const getCart=(reqData)=>async (dispatch)=>{

    dispatch({type:GET_CART_REQUEST})

    try
    {
        const {data} =await api.get(`/api/cart/`)
        console.log("GetCart Data : " , data)

        dispatch({type:GET_CART_SUCCESS, payload:data})
    }
    catch(error)
    {
        console.error("Error fetching cart:", error.message); // Log the error
        dispatch({type:GET_CART_FAILURE, payload:error.message})
    }
}



export const addItemToCart=(reqData)=>async (dispatch)=>{

    dispatch({type:ADD_ITEM_TO_CART_REQUEST})

    try
    {
        const {data} =await api.put("/api/cart/add" , reqData)

        console.log("Add Item To Cart Data : " , data)

        dispatch({type:ADD_ITEM_TO_CART_SUCCESS, payload:data})
    }
    catch(error)
    {
        dispatch({type:ADD_ITEM_TO_CART_FAILURE, payload:error.message})
    }
}



export const removeCartItem = (cartItemId) => async (dispatch) => {
    console.log("Dispatching REMOVE_CART_ITEM_REQUEST");
    dispatch({ type: REMOVE_CART_ITEM_REQUEST });

    try {
        console.log("Attempting to delete cart item with ID:", cartItemId);
        const { data } = await api.delete(`/api/cart_items/${cartItemId}`);
        
        console.log("Response data from delete request:", data);
        dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId });
    } catch (error) {
        console.error("Error occurred while deleting cart item:", error);
        dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message });
    }
}




export const updateCartItem=(reqData)=>async (dispatch)=>{

    dispatch({type:UPDATE_CART_ITEM_REQUEST})

    try
    {
        const {data} =await api.put(`/api/cart_items/${reqData.cartItemId}`,reqData.data)

        dispatch({type:UPDATE_CART_ITEM_SUCCESS, payload:data})
    }
    catch(error)
    {
        dispatch({type:UPDATE_CART_ITEM_FAILURE, payload:error.message})
    }
}