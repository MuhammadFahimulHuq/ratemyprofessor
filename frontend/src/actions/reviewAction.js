import { REVIEW_GET_FAIL, REVIEW_GET_REQUEST, REVIEW_GET_SUCCESS } from "../constants/reviewConstant"
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