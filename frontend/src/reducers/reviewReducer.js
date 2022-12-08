import { REVIEW_GET_FAIL, REVIEW_GET_REQUEST, REVIEW_GET_SUCCESS, REVIEW_POST_FAIL, REVIEW_POST_REQUEST, REVIEW_POST_RESET, REVIEW_POST_SUCCESS } from "../constants/reviewConstant";

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
export const postReviewReducer = (state={},action) =>{
    switch(action.type){
        case REVIEW_POST_REQUEST:
            return{
                loading:true,
            }
        case REVIEW_POST_SUCCESS:
            return{
                loading:false,
                success:true,
                review:action.payload
            }    
        case REVIEW_POST_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case REVIEW_POST_RESET:
            return{}        
        default:{
            return state
        }    
    }
}