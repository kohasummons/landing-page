import {
  LOGIN_USER,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_USER,
  CLEAR_ERROR,
} from "./authTypes";

const initialState = {
  loading: false,
  userData: {},
  userToken: null,
  errors: null,
  success: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CLEAR_ERROR:
      return {
        ...state,
        errors: "",
      };
    case REGISTER_USER:
      return {
        ...state,
        success: true,
      };
    case LOGIN_USER:
      return {
        ...state,
        success: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        userData: payload.result,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: payload.result,
        userToken: payload.result.token,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        errors: payload.message,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        errors: payload.message,
        success: false,
      };
    default:
      return state;
  }
};

export default authReducer;
