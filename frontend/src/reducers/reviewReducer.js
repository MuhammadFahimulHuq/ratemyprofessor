import { REVIEW_GET_FAIL, REVIEW_GET_REQUEST, REVIEW_GET_SUCCESS } from "../constants/reviewConstant";

export const getReviewReducer = (state={reviews:[]},action) =>{
    switch(action.type){
        case REVIEW_GET_REQUEST:
            return{
                loading:true,
                reviews:[]
            }
        case REVIEW_GET_SUCCESS:
            return{
                loading:false,
                reviews:action.payload
            }    
        case REVIEW_GET_FAIL:
            return{
                loading:false,
                error:action.payload
            }    
        default:{
            return state
        }    
    }
}