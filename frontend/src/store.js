import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
  getAllFacultyReducer,
  facultyDetailReducer,
} from "./reducers/userReducer";
import { getReviewReducer, postReviewReducer } from "./reducers/reviewReducer";
import { updateProfileReducer } from "./reducers/profileReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  getAllFaculty: getAllFacultyReducer,
  facultyDetail: facultyDetailReducer,
  getReviews: getReviewReducer,
  postReview: postReviewReducer,
  updateProfile: updateProfileReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
