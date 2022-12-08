import { REVIEW_GET_FAIL, REVIEW_GET_REQUEST, REVIEW_GET_SUCCESS, REVIEW_POST_FAIL, REVIEW_POST_REQUEST, REVIEW_POST_SUCCESS } from "../constants/reviewConstant"
import axios from 'axios'

export const fetchReviews=(id)=>async(dispatch)=>{
    try{
        dispatch({
            type:REVIEW_GET_REQUEST
        })

        const config = {
            headers:{
                'Content-type':'application/json',
               
            }
        }
    const {data} = await axios.get(`http://127.0.0.1:8000/api/get/review/${id}`,config)
    dispatch({
        type:REVIEW_GET_SUCCESS,
        payload:data
    })
    }catch(error){
     dispatch({
        type:REVIEW_GET_FAIL,
                payload: error.response && error.response.data.errors ? 
                error.response.data.errors : error.response.data
     })}
}

export const createReviews=(id,rating,comment)=>async(dispatch,getState)=>{
    try{
        dispatch({
            type:REVIEW_POST_REQUEST
        })
        const{userLogin:{userInfo}} = getState()
        const config = {
            headers:{
                'Content-type':'application/json',
                'Authorization': `Bearer ${userInfo.token}`
            }
        }
    const {data} = await axios.post(`http://127.0.0.1:8000/api/review/${id}`,{rating,comment},config)
    dispatch({
        type:REVIEW_POST_SUCCESS,
        payload:data
    })
    }catch(error){
     dispatch({
        type:REVIEW_POST_FAIL,
                payload: error.response && error.response.data.errors ? 
                error.response.data.errors : error.response.data
     })}
}