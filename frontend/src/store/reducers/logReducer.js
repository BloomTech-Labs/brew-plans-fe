import axios from "axios";

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

const initialState = {
  isLoading: false,
  isEditing: false,
  logs: [],
  currentLog: {
      id: null,
      recipe_id: null ,
      rating: 4,
      comment: "Initial Commment",
      createdAt: ""
  }
};

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_LOGS_SUCCESS:
      return {
        ...state,
        logs: action.payload,
        isLoading: false
      };
    case GET_LOGS_FAIL:
      console.log("action in reducer", action);
      return {
        ...state,
        isLoading: false
      };

    case CREATE_LOGS_START:
      return {
        ...state,
        isLoading: true
      };
    case CREATE_LOGS_SUCCESS:
      return {
        ...state,
        currentLog: {},
        isLoading: false
      };
    case CREATE_LOGS_FAIL:
      console.log("action in reducer", action);
      return {
        ...state,
        isLoading: false
      };
    case DELETE_LOGS_START:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_LOGS_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case DELETE_LOGS_FAIL:
      return {
        ...state,
        isLoading: false
      };
    case UPDATE_LOGS_START:
      return {
        ...state,
        isLoading: true
      };
    case UPDATE_LOGS_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case UPDATE_LOGS_FAIL:
      return {
        ...state,
        isLoading: false
      };
      case UPDATE_LOGFORM_INPUT:
          const {inputType, inputValue} = action.payload
          return{
              ...state,
              currentLog: {
                  ...state.currentLog,
                  [inputType]: inputValue
              }
          }
    default:
      return state;
  }
};

export default logReducer;
