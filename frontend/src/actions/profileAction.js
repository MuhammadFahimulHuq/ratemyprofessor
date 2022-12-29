import axios from "axios";
import {
  PROFILE_UPDATE_FAIL,
  PROFILE_UPDATE_REQUEST,
  PROFILE_UPDATE_SUCCESS,
} from "../constants/profileConstant";

export const updateUserProfile =
  (name, email, phoneNo, profile_image_path) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PROFILE_UPDATE_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.put(
        `http://127.0.0.1:8000/api/update/faculty/${userInfo.user.id}`,
        { name, email, phoneNo, profile_image_path },
        config
      );
      dispatch({
        type: PROFILE_UPDATE_SUCCESS,
        payload: data,
      });
      const userInfoLocal = localStorage.getItem("userInfo");
      localStorage.setItem(userInfoLocal.user, data);
    } catch (error) {
      dispatch({
        type: PROFILE_UPDATE_FAIL,
        payload:
          error.response && error.response.data.errors
            ? error.response.data.errors
            : error.response.data,
      });
    }
  };
