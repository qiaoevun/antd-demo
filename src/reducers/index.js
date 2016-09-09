import {combineReducers} from 'redux';
import {auth} from './auth';
import {userManage} from './user';
import {path} from './pathRoute';
import {reportManage} from './reports';
import {classFlight} from './../components/classManage/classFlight/reducer';

const rootReducer = combineReducers({
  auth,path,userManage,reportManage,classFlight
})


export default rootReducer
