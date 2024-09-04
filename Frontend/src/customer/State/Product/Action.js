import { api, API_BASE_URL } from "../../../config/apiConfig";
import {
    CREATE_PRODUCT_FAILURE,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    FIND_PRODUCT_BY_ID_FAILURE,
    FIND_PRODUCT_BY_ID_REQUEST,
    FIND_PRODUCT_BY_ID_SUCCESS,
    FIND_PRODUCT_FAILURE,
    FIND_PRODUCT_REQUEST,
    FIND_PRODUCT_SUCCESS
} from "./ActionType.js";

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_REQUEST });

    const {
        sizes,
        minPrice,
        maxPrice,
        colors,
        minDiscount, 
        category,     
        sort,
        stock,
        pageNumber,
        pageSize
    } = reqData;


    try {
        const { data } = await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&sort=${sort}&stock=${stock}&pageNumber=${pageNumber}&pageSize=${pageSize}&categories=${category}&discount=${minDiscount}`);
        
        // console.log("API Response Data Ayu: ", reqData);
        console.log("Product Data: ", data);

        

        console.log("findProducts data : ", data);

        dispatch({ type: FIND_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_FAILURE, payload: error.message });
    }
};


export const findProductsById = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });

    const { productId } = reqData;

    try {
        const { data } = await api.get(`/api/products/id/${productId}`);
        console.log("findProductsById Data : " , data)


        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
    }
};



export const createProduct = (product) => async (dispatch) => {
    
    
    try {
        dispatch({ type: CREATE_PRODUCT_REQUEST });

        // const { data } = await api.post(`/api/admin/products${product}`);
        const { data } = await api.post('/api/admin/products', product);

        
        console.log("Created product : " , data)

        dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message });
    }
};






export const deleteProduct = (productId) => async (dispatch) => {
    
    
    try {
        dispatch({ type: DELETE_PRODUCT_REQUEST });

        const { data } = await api.delete(`${API_BASE_URL}/api/admin/products/${productId}`);


        console.log("Delete product : " , data)

        dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId });
    } catch (error) {
        dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
    }
};


