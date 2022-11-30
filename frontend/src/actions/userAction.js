import axios from 'axios'
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from '../constants/userConstant'

export const login=(email,password)=> async(dispatch)=>{
    try{
        dispatch({
            type:USER_LOGIN_REQUEST
        })
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post('http://127.0.0.1:8000/api/login',{email,password},config)
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('userInfo',JSON.stringify(data))
    }catch(error){
        dispatch({
            type:USER_LOGIN_FAIL,
            payload: error.response && error.response.data.errors ? 
            error.response.data.errors : error.response.data
        })
     
    }
}
export const register=(name,email,phoneNo,password,password_confirmation)=> async(dispatch)=>{
    try{
        dispatch({
            type:USER_REGISTER_REQUEST
        })
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post('http://127.0.0.1:8000/api/student/register',{name,email,phoneNo,password,password_confirmation},config)
        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        })
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data,
        })
        localStorage.setItem('userInfo',JSON.stringify(data))
    }catch(error){
        dispatch({
            type:USER_REGISTER_FAIL,
            payload: error.response && error.response.data.errors ? 
            error.response.data.errors : error.response.data
        })
     
    }
}
export const logout= ()=>(dispatch)=>{
localStorage.removeItem('userInfo')
dispatch({type:USER_LOGOUT})
}