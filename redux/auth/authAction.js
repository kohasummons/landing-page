import request from "../../utils/requestMethods";

import {
  LOGIN_USER,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_USER,
  CLEAR_ERROR,
} from "./authTypes";

const registerUser = async (dispatch, userData) => {
  try {
    dispatch({ type: CLEAR_ERROR });
    let result = await request.post("/auth/register", userData);
    result = result.json();
    result.status = "success";
    dispatch({ type: REGISTER_USER });
    dispatch({ type: REGISTER_SUCCESS, payload: result });

    return result;
  } catch (error) {
    let message = {};
    message.title = error.message;
    message.status = "error";

    dispatch({ type: REGISTER_FAILURE, payload: message });

    return message;
  }
};

const loginUser = async (dispatch, userData) => {
  try {
    dispatch({ type: CLEAR_ERROR });
    let result = await request.post("/auth/login", userData);
    result = result.json();
    dispatch({ type: LOGIN_USER, payload: result });
    dispatch({ type: LOGIN_SUCCESS });
    return result;
  } catch (error) {
    let message = {};

    message.title = error.message;
    message.status = "error";

    dispatch({ type: LOGIN_FAILURE, payload: message });
    return message;
  }
};

export { loginUser, registerUser };
