import * as types from './../../../constant/ActionTypes';

import Immutable from 'immutable';

export function classFlight(state,action){
  return { items:items(state,action),classpackage:classpackage(state,action) }
  //Immutable.fromJS({ items:items(state,action) });
}


function items(state=[],action){
  /*console.log(state)
  console.log(action.data)*/
  switch (action.type){
    case types.CLASSFLIGHT_LIST:{
      return action.data
    }
    case types.DELETE_ALL_CLASS_SUCCESS:{
      return state.items.filter(function(item){
         return action.items.indexOf(item.id)<0
      })
    }
    case types.DELETE_CLASS_SUCCESS:{
      return state.items.filter(function(item){
         return item.id != action.id
      })
    }
    default:
    return state.items;
  }
}
function classpackage(state=[],action){
  switch (action.type){
    case types.QUERY_CLASSPACKAGE:{
      return action.data
    }
    default: return state.classpackage; 
  }
}