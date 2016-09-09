import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_SUCCESS, LOGOUT_REQUEST,TITLE_INFO
} from './../constant/actionTypes';
import xAjax from './../services/xAjax';
import cookie from 'js-cookie';

import { API_CONFIG } from './../config/api';

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  };
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user
  };
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  };
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}

function getTitleInfo(user){
  return {
    type: TITLE_INFO,
    user
  }
}

export function loginUser(creds,cbk,error) {
  return dispatch => {
    dispatch(requestLogin(creds));
    xAjax(API_CONFIG.auth,{data:creds}).then(function(data){
        if(data.success==true||data.success=="true"){
          cookie.set('kq.cookie.name', creds.account);
          cbk();
          dispatch(receiveLogin(data));
        }else{
          error(creds.account,data);
        }
    })
           /*$.ajax({
                url: API_CONFIG.auth,
                type:'post',
                dataType: 'json',
                data:creds,
                success: function (data) {
                    if(data.success==true||data.success=="true"){
                      cookie.set('kq.cookie.name', creds.account);
                      dispatch(receiveLogin(data));
                    }else{
                      cbk(creds.account,data);
                    }
                },
                error:function(){

                }
            });*/

 /*   xFetch(
      //API_CONFIG.auth,
      'http://localhost:8080/GL_Attendance/login/confirm.do',
      { method: "POST", 
      headers: {
      //  "Content-Type": "application/x-www-form-urlencoded"
      }, 
      mode : 'cors' , body: "account=admin&password=admin" }).then(function(){return response.text()}).then((response) => {
      console.log(response);
      if (response.jsonResult.error_code === 4001) {
        dispatch(loginError(response.jsonResult.error_message));
        cbk(creds.username, response.jsonResult.error_message);
      } else {
        cookie.set('access_token', creds.account
        //response.jsonResult.access_token
        );
        dispatch(receiveLogin(response.jsonResult));
      }
    });
*/

  };
}
export function getTitle(cbk){
  return dispatch => {
    xAjax(API_CONFIG.initTitle).then(function(data){
        if(data.success==true||data.success=="true"){
          dispatch(getTitleInfo(data.resultDTO));
        }else{
          cbk(creds.account,data.msg);
        }
    })
  }
}
export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout());
    cookie.remove('kq.cookie.name');
    dispatch(receiveLogout());
  };
}
