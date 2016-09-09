import {changeRoute} from './../../../actions/route';
import * as types from './../../../constant/ActionTypes';
import { API_CONFIG } from './../../../config/api';
import xAjax from './../../../services/xAjax';
import { Modal } from 'antd';
const confirm = Modal.confirm;

function setDataList(data){
  return {
    type : types.CLASSFLIGHT_LIST,
    data
  }
}
function setClassPackage(data){
  return {
    type : types.QUERY_CLASSPACKAGE,
    data
  }
}
function delSuccess(id){
  return {
    type : types.DELETE_CLASS_SUCCESS,
    id
  }
}
function deleteAll(){
  return {
    type : types.DELETE_ALL_CLASSFLIGHT,
  }
}
function delAllSuccess(items){
  return {
    type : types.DELETE_ALL_CLASS_SUCCESS,
    items
  }
}
export function getDataList(error,data){
  return dispatch => {
        xAjax(API_CONFIG.classFlight,{data:data}).then(function(data){
          if(data.success==true){
                dispatch(setDataList(data.resultList));
              }else{
                //cbk(creds.account,data);
                error();
              }
        })
  };
}
export function addClassFlight(error,cbk,formlist){
  return dispatch =>{
    xAjax(API_CONFIG.addClassFlight,{data:formlist}).then(function(data){
      if(data.success){
        cbk();
      }else{
        error();
      }
    })
  }
}
export function editClassFlight(error,cbk,formlist){
  return dispatch =>{
    xAjax(API_CONFIG.editClassFlight,{data:formlist}).then(function(data){
      if(data.success){
        cbk();
      }else{
        error();
      }
    })
  }
}
export function queryClassPackage(id){
  return dispatch => {
    xAjax(API_CONFIG.queryClassPackage,{data:{id:id}}).then(function(data){
      if(data.success==true){
        dispatch(setClassPackage(data.resultList));
      }else{
        //cbk(creds.account,data);
      }
    })
  };
}
export function deleteClassFlight(error,cbk,userid,id){
  return dispatch => {
    xAjax(API_CONFIG.deleteClassFlight,{data:{id:id,flag:"0",loginId:userid}}).then(function(data){
      if(data.success==true){
          confirm({
            title: '提示',
            content: '您是否确认删除',
            onOk() {
                xAjax(API_CONFIG.deleteClassFlight,{data:{id:id,flag:"1",loginId:userid}}).then(function(data){
                    if(data.success==true){
                        dispatch(delSuccess(id));
                        cbk();
                    }else{error()}
                })
            },
            onCancel() {},
          });
      }else{
          error();
      }
    })
  }
}
export function deleteAllClassFlight(error,cbk,cbc,userid,idlist){
  let idliststring = idlist.join(",");
  return dispatch => {
    xAjax(API_CONFIG.deleteAllClassFlight,{data:{list:idliststring,flag:"0",loginId:userid}}).then(function(data){
      if(data.success==true){
          confirm({
            title: '提示',
            content: '您是否确认删除',
            onOk() {
                xAjax(API_CONFIG.deleteAllClassFlight,{data:{list:idliststring,flag:"1",loginId:userid}}).then(function(data){
                    if(data.success==true){
                      dispatch(delAllSuccess(idliststring));
                      cbk();
                    }else{error()}
                })
            },
            onCancel() {cbc(data)},
          });
      }else{
          error();
      }
    })
  }
}