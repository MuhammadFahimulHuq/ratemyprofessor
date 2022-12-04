import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,USER_LOGOUT, USER_REGISTER_SUCCESS,USER_REGISTER_FAIL,USER_REGISTER_REQUEST, USER_FACULTY_REQUEST, USER_FACULTY_SUCCESS, USER_FACULTY_FAIL, USER_FACULTY_DETAIL_REQUEST, USER_FACULTY_DETAIL_SUCCESS, USER_FACULTY_DETAIL_FAIL } from "../constants/userConstant";

export const userLoginReducer=(state={},action)=>{
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {
                loading:true
            }
        case USER_LOGIN_SUCCESS:
            return{
                loading:false,userInfo: action.payload
            }    
        case USER_LOGIN_FAIL:
            return{
                loading:false,error:action.payload
            }    
        case USER_LOGOUT:
            return{}
            
            default:
                return state
    }
} 
export const userRegisterReducer = (state={},action)=>{
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return{
                loading:true
            }
        case USER_REGISTER_SUCCESS:
            return{
                loading:false,userInfo:action.payload
            }
        case USER_REGISTER_FAIL:
            return{
                loading:false,error:action.payload
            }    
            default:
                return state
        }
    }
export const getAllFacultyReducer = (state={faculties:[]},action)=>{
    switch(action.type){
        case USER_FACULTY_REQUEST:
            return {
                loading:true,
                faculties:[]
            }
        case USER_FACULTY_SUCCESS:{
            return {
                loading:false,
                faculties:action.payload
            }
        }
        case USER_FACULTY_FAIL:{
            return {
                loading:false,
                error:action.payload
            }
        }
        default:
            return state    
        }   
    }
export const facultyDetailReducer = (state={faculty:{}},action)=>{
    switch(action.type){
        case USER_FACULTY_DETAIL_REQUEST:
            return{
                loading:true,
                faculty:{}
            }
        case USER_FACULTY_DETAIL_SUCCESS:
                return {
                loading:false,
                faculty:action.payload
            }    
        case USER_FACULTY_DETAIL_FAIL:
            return{
                loading:false,
                error:action.error
            } 
        default:
            return state       
    }
}