// 统一声明默认State
import cookie from 'js-cookie';

export default {
  auth: {
    isFetching: false,
    isAuthenticated: cookie.get('kq.cookie.name') ? true : false,
    user:{
      "createUserId": "",
      "updateUserId": "",
      "status": "0",
      "id": "",
      "name": "",
      "account": "",
      "password": "",
      "telephone": "",
      "address": null,
      "sex": "",
      "descript": "",
      "isAdmin": "",
      "departmentId": "",
      "companyId": null,
      "companyName": "",
      "roleName": "",
      "roleId": ""
    }
  },
  users: {
    isFetching: false,
    meta: {
      total: 0,
      perPage: 10,
      page: 1
    },
    data: []
  }
};
