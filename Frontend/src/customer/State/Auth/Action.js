import axios from "axios"
import { API_BASE_URL } from "../../../config/apiConfig"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGOUT } from "./ActionType"

const token = localStorage.getItem("jwt")

const registerRequest=()=>({type:GET_USER_REQUEST})
const registerSuccess=(user)=>({type:GET_USER_SUCCESS , payload:user})
const registerFailure=(error)=>({type:GET_USER_FAILURE , payload:error})


export const register =(userData)=> async (dispatch)=>{
    
    dispatch(registerRequest())
    
    try
    {
        const response = await axios.post(`${API_BASE_URL}/auth/signup` , userData )

        const user = response.data ;

        if(  user.jwt )
        {
            localStorage.setItem("jwt" , user.jwt)
        }
        console.log("user : " , user )
        dispatch(registerSuccess(user.jwt))

    }
    catch(error)
    {
        dispatch(registerFailure(error.message))
    }

}





const loginRequest=()=>({type:GET_USER_REQUEST})
const loginSuccess=(user)=>({type:GET_USER_SUCCESS , payload:user})
const loginFailure=(error)=>({type:GET_USER_FAILURE , payload:error})


export const login =(userData)=> async (dispatch)=>{
    
    dispatch(loginRequest())
    
    try
    {
        const response = await axios.post(`${API_BASE_URL}/auth/signin` , userData )

        const user = response.data ;

        if(  user.jwt )
        {
            localStorage.setItem("jwt" , user.jwt)
        }
        console.log("User data after login:", user);
        dispatch(loginSuccess(user.jwt))

    }
    catch(error)
    {
        console.error("Login error:", error);
        dispatch(loginFailure(error.message))
    }

}




const getUserRequest=()=>({type:GET_USER_REQUEST})
const getUserSuccess=(user)=>({type:GET_USER_SUCCESS , payload:user})
const getUserFailure=(error)=>({type:GET_USER_FAILURE , payload:error})



export const getUser =(jwt)=> async (dispatch)=>{
    
    dispatch(getUserRequest())
    
    try
    {
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        });

        const user = response.data ;
        console.log("user : " , user )
        dispatch(getUserSuccess(user))

    }
    catch(error)
    {
        dispatch(getUserFailure(error.message))
    }

}


export const logout=()=>(dispatch)=>{
    dispatch({type:LOGOUT , payload: null })
    localStorage.clear();
}