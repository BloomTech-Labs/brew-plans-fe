import {
  GET_LOGS_START,
  GET_LOGS_SUCCESS,
  GET_LOGS_FAIL,
  CREATE_LOGS_START,
  CREATE_LOGS_SUCCESS,
  CREATE_LOGS_FAIL,
  DELETE_LOGS_START,
  DELETE_LOGS_SUCCESS,
  DELETE_LOGS_FAIL,
  UPDATE_LOGS_START,
  UPDATE_LOGS_SUCCESS,
  UPDATE_LOGS_FAIL,
  UPDATE_LOGFORM_INPUT
} from "../actions/actionTypes";

import axios from "axios";

export const getLogs = userId => dispatch => {
  dispatch({ type: GET_LOGS_START });
  axios
    .get(`localhost:6000/logs/${userId}`)
    .then(res => {
      dispatch({ type: GET_LOGS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_LOGS_FAIL, payload: err });
    });
};

export const deleteLog = log_id => dispatch => {
  dispatch({ type: DELETE_LOGS_START });
  axios.delete(`localhost:6000/logs/${log_id}`)
  .then(res => {dispatch({type: DELETE_LOGS_SUCCESS, payload: log_id})})
  .catch(err=> dispatch({type: DELETE_LOGS_FAIL, payload: err}))
};

export const createLog = (currentLog, userId) => dispatch=> {
    dispatch({type: CREATE_LOGS_START})
    currentLog.user_id = userId
    axios.post(`localhost:6000/logs/new`, currentLog)
    .then(res=> {
        dispatch({type: CREATE_LOGS_SUCCESS, payload: res.data})
    })
    .catch(err=> {
        dispatch({type: CREATE_LOGS_FAIL, payload: err})
    })
}

export const updateLog = (currentLog)=> dispatch=> {
    dispatch({type: UPDATE_LOGS_START})
    currentLog.user_id = userId
    axios.put(`localhost:6000/logs/${currentLog.id}`, currentLog)
    .then(res=> {
        dispatch({type: UPDATE_LOGS_SUCCESS, payload: res.data})
    })
    .catch(err=> {
        dispatch({type: UPDATE_LOGS_FAIL, payload: err})
    })
}

export const handleLogFormChange = (inputField, inputValue) => dispatch => {
    dispatch({
      type: UPDATE_LOGFORM_INPUT,
      payload: {
        inputType: inputField,
        inputValue: inputValue
      }
    });
  };