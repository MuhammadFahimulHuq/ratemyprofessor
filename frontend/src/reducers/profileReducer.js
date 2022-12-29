import {
  PROFILE_UPDATE_FAIL,
  PROFILE_UPDATE_REQUEST,
  PROFILE_UPDATE_SUCCESS,
} from "../constants/profileConstant";

export const updateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case PROFILE_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case PROFILE_UPDATE_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case PROFILE_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
