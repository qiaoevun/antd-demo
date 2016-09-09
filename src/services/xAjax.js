
import cookie from 'js-cookie';
import { API_CONFIG } from './../config/api';
import $ from 'jquery';
import {Modal,message} from 'antd';

const errorMessages = (res) => `${res.status} ${res.statusText}`;

function check401(res) {
	console.log(res)
  // 登陆界面不需要做401校验
  if (res.status === 401 && !res.url.match('auth')) {
    Modal.error({
      title: "登陆验证过期",
      content: "您的登录验证已过期，请重新登录",
      onOk: () => {
        cookie.remove('kq.cookie.name');
        location.href = '/';
      }
    });
    return Promise.reject(errorMessages(res));
  }
  if (res.status === 401) {
    location.href = '/401';
  }
  return res;
}
function check403(res) {
  if (res.status === 403) {
  	message.error("403错误：请求被拒绝");
    return Promise.reject(errorMessages(res));
  }
  return res;
}
function check404(res) {
  if (res.status === 404) {
    return Promise.reject(errorMessages(res));
  }
  return res;
}

function jsonParse(res) {
  //return res.json().then(jsonResult => ({ ...res, jsonResult }));
  if(typeof(res)==='string'){
  	return eval('('+res+')');
  }
  return res;
}

function setUriParam(keys, value, keyPostfix) {
  let keyStr = keys[0];

  keys.slice(1).forEach((key) => {
    keyStr += `[${key}]`;
  });

  if (keyPostfix) {
    keyStr += keyPostfix;
  }

  return `${encodeURIComponent(keyStr)}=${encodeURIComponent(value)}`;
}

function getUriParam(keys, object) {
  const array = [];

  if (object instanceof(Array)) {
    object.forEach((value) => {
      array.push(setUriParam(keys, value, '[]'));
    });
  } else if (object instanceof(Object)) {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const value = object[key];

        array.push(getUriParam(keys.concat(key), value));
      }
    }
  } else {
    if (object !== undefined) {
      array.push(setUriParam(keys, object));
    }
  }

  return array.join('&');
}

function toQueryString(object) {
  const array = [];

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const str = getUriParam([key], object[key]);

      if (str !== '') {
        array.push(str);
      }
    }
  }

  return array.join('&');
}

function errorMessageParse(res) {
	console.log(typeof(res))
  const { success, msg } = res;//.jsonResult;
  if (!success||success=="false") {
  	message.error("错误:" + msg);
    //return Promise.reject(message);
  }
  return res;
}
function error(res){
		if (res.status === 401 && !res.url.match('auth')) {
	    Modal.error({
	      title: "登录验证过期",
	      content: "您的登陆验证已过期，请重新登录",
	      onOk: () => {
	        cookie.remove('kq.cookie.name');
	        location.href = '/';
	      }
	    });
	    return Promise.reject(errorMessages(res));
	  	}
	  	if (res.status === 401) {
	   	 location.href = '/401';
	  	}
	  	if (res.status === 403) {
		  	message.error("403错误：请求被拒绝");
		    return Promise.reject(errorMessages(res));
		}
		if (res.status === 404) {
			message.error("404错误：页面不存在");
		    return Promise.reject(errorMessages(res));
		  }
		 if (res.status === 405) {
			message.error("405错误：请求被拒绝");
		    return Promise.reject(errorMessages(res));
		  }
	  	return res;
}
function xAjax(url, options) {
  let mergeUrl = API_CONFIG.baseUri + url;
  const defaultOptions = {
    method: 'post',
    url:mergeUrl
  };
  const opts = Object.assign({}, defaultOptions, {...options});
  opts.headers = {
    ...opts.headers,
    authorization: cookie.get('kq.cookie.name') || '',
  };
  return $.ajax(opts)
  	.fail(error)
    .then(jsonParse)
    .then(errorMessageParse);
}
export default xAjax;