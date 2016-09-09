import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_SUCCESS,INIT_USER_TITLE,TITLE_INFO
} from './../constant/actionTypes';
import Immutable from 'immutable';
import initialState from './initialState';

export function auth(state,action){
   return changeAuth(state,action);
}

function changeAuth(state = initialState.auth, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        user: action.user,
        errorMessage: ''
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      });
    case TITLE_INFO:
      return Object.assign({},state,{
        user:action.user
      })
    default:
      return state;
    }
}