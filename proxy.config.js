// Learn more on how to config.
// - https://github.com/dora-js/dora-plugin-proxy#规则定义

module.exports = {
  '/api/todos': function(req, res) {
    setTimeout(function() {
      res.json({
        success: true,
        data: [
          {
            id: 1,
            text: 'Learn antd',
            isComplete: true,
          },
          {
            id: 2,
            text: 'Learn ant-tool',
          },
          {
            id: 3,
            text: 'Learn dora',
          },
        ],
      });
    }, 500);
  },
  '/login/confirm.do': function(req, res) {
    setTimeout(function() {
      res.json({
        success: "true",
        "email": "justin@beansmile.com",
        "password": "12345678",
        "access_token":"db34ieng-fehgeing",
        "message":"成功"
      });
    }, 500);
  },
  '/home/initTitle.do': function(req, res){
    setTimeout(function(){
        res.json({
            "resultDTO": {
                "createUserId": "001",
                "updateUserId": "001",
                "status": "1",
                "id": "001",
                "name": "系统管理员",
                "account": "admin",
                "password": "21232f297a57a5a743894a0e4a801fc3",
                "telephone": "159571***",
                "address": null,
                "sex": "1",
                "descript": "123",
                "isAdmin": "1",
                "departmentId": "001",
                "companyId": null,
                "companyName": "-",
                "roleName": "系统管理员",
                "roleId": "001"
            },
            "msg": "登陆成功",
            "success": true
        })
    },100)
  },
  '/classManage/classFlight/doInsert.do':function(req,res){
    res.json({
        success:true
    })
  },
  '/classManage/classFlight/doUpdate.do':function(req,res){
    res.json({
        success:true
    })
  },
  '/classManage/classFlight/doDelete.do': function(req,res){
    res.json({
        success:true
    })
  },
  '/classManage/classFlight/doDelete.do': function(req,res){
    res.json({
        success:true
    })
  },
  '/classManage/classFlight/queryClassPackage.do': function(req,res){
    setTimeout(function(){
        res.json({
            "resultList": [
                {
                    
                    "id": "c80b9e11-e177-4f6d-a7ae-50662ae5582b",
                    "name": "11111111",
                    "recordType": "2",
                    "type": 2
                },
                {
                    
                    "id": "7be6bdd4-4bd2-4cd8-be48-b1ea561631f66",
                    "name": "张山测试班包",
                    "recordType": "1",
                    "type": 2
                },
                {
                    
                    "id": "7be6bdd4-4bd2-4cd9-be48-b1e2a56631f66",
                    "name": "张山测试班包",
                    "recordType": "2",
                    "type": 2
                },
                {
                    
                    "id": "7be6bdd4-4bd2-4c39-be48-b1ea356631f66",
                    "name": "张山测试班包",
                    "recordType": "2",
                    "type": 2
                },
                {
                    
                    "id": "7be6bdd4-4bd2-42d9-be48-b1ea546631f66",
                    "name": "张山测试班包",
                    "recordType": "2",
                    "type": 2
                },
                {
                    
                    "id": "7be6bd1-4bd2-42d9-be48-b1ea556631f66",
                    "name": "张山测试班包",
                    "recordType": "2",
                    "type": 2
                },
                {
                    
                    "id": "7be6b14-4bd2-42d9-be48-b1ea656631f66",
                    "name": "张山测试班包",
                    "recordType": "2",
                    "type": 2
                },
                {
                    
                    "id": "7be6bdd4-4bd2-42d9-be41-b1ea156631f66",
                    "name": "张山测试班包",
                    "recordType": "2",
                    "type": 2
                },
                {
                    
                    "id": "7be6bdd4-4bd2-42d9-be48-b1ea561631f66",
                    "name": "张山测试班包",
                    "recordType": "2",
                    "type": 2
                }
            ],
            "resultAllList": null,
            "resultDTO": null,
            "msg": null,
            "success": true,
            "baseResultTitle": null
        })
    },500)
  },
  '/classManage/classFlight/doQuery.do': function(req, res) {
    setTimeout(function() {
      res.json({
        "resultList": [
            {
                "createTime": 1464325357000,
                "createUserId": "6016f91a-34e6-4f5b-aecf-9e4d38e92271",
                "updateTime": 1464325357000,
                "updateUserId": "6016f91a-34e6-4f5b-aecf-9e4d38e92271",
                "status": "1",
                "id": "4e7dfec3-7c7c-45b5-beb7-458ba870f4ab",
                "name": "易云test2",
                "beginTime": "09:00",
                "endTime": "18:00",
                "descript": null,
                "isSystemDefault": "0",
                "checked": null,
                "companyName": "易云公司"
            },
            {
                "createTime": 1464325099000,
                "createUserId": "9ffae69c-9ff0-46e6-9563-4ca1155ca3a6",
                "updateTime": 1464325099000,
                "updateUserId": "9ffae69c-9ff0-46e6-9563-4ca1155ca3a6",
                "status": "1",
                "id": "26bd833b-500e-4bbc-bf13-8aa473115e59",
                "name": "易云test",
                "beginTime": "09:00",
                "endTime": "18:00",
                "descript": null,
                "isSystemDefault": "0",
                "checked": null,
                "companyName": "易云公司"
            },
            {
                "createTime": 1463380092000,
                "createUserId": "001",
                "updateTime": 1463380103000,
                "updateUserId": "001",
                "status": "1",
                "id": "1c2e6fe4-1546-4bff-8dcf-c16f8ba5711c",
                "name": "张山测试班次",
                "beginTime": "00:00",
                "endTime": "18:00",
                "descript": "张山测试班包",
                "isSystemDefault": "1",
                "checked": null,
                "companyName": "-"
            },
            {
                "createTime": 1463119095000,
                "createUserId": "001",
                "updateTime": 1463119095000,
                "updateUserId": "001",
                "status": "1",
                "id": "9b442812-f67d-4414-a442-32b46bb5f4d3",
                "name": "test22",
                "beginTime": "13:00",
                "endTime": "17:00",
                "descript": null,
                "isSystemDefault": "1",
                "checked": null,
                "companyName": "-"
            },
            {
                "createTime": 1463119077000,
                "createUserId": "001",
                "updateTime": 1463119077000,
                "updateUserId": "001",
                "status": "1",
                "id": "c5a04606-e271-4a8c-8f56-39d9526f7514",
                "name": "test11",
                "beginTime": "08:30",
                "endTime": "12:00",
                "descript": null,
                "isSystemDefault": "1",
                "checked": null,
                "companyName": "-"
            },
            {
                "createTime": 1462935017000,
                "createUserId": "001",
                "updateTime": 1462935017000,
                "updateUserId": "001",
                "status": "1",
                "id": "2dadcae4-27b5-471f-96ca-377098e7cfa6",
                "name": "按天排版测试",
                "beginTime": "08:00",
                "endTime": "19:35",
                "descript": null,
                "isSystemDefault": "1",
                "checked": null,
                "companyName": "-"
            },
            {
                "createTime": 1462934397000,
                "createUserId": "6016f91a-34e6-4f5b-aecf-9e4d38e92271",
                "updateTime": 1462934397000,
                "updateUserId": "6016f91a-34e6-4f5b-aecf-9e4d38e92271",
                "status": "1",
                "id": "f7a3f879-ca3e-42d8-a997-c7d66bcbc214",
                "name": "newtest班次",
                "beginTime": "09:00",
                "endTime": "18:00",
                "descript": null,
                "isSystemDefault": "0",
                "checked": null,
                "companyName": "易云公司"
            },
            {
                "createTime": 1462859976000,
                "createUserId": "6016f91a-34e6-4f5b-aecf-9e4d38e92271",
                "updateTime": 1462865064000,
                "updateUserId": "6016f91a-34e6-4f5b-aecf-9e4d38e92271",
                "status": "1",
                "id": "351fe60f-6db2-4c08-b83b-c8b22abc24e1",
                "name": "test2",
                "beginTime": "14:00",
                "endTime": "20:55",
                "descript": null,
                "isSystemDefault": "0",
                "checked": null,
                "companyName": "易云公司"
            },
            {
                "createTime": 1462843624000,
                "createUserId": "6016f91a-34e6-4f5b-aecf-9e4d38e92271",
                "updateTime": 1462843624000,
                "updateUserId": "6016f91a-34e6-4f5b-aecf-9e4d38e92271",
                "status": "1",
                "id": "2b687ca1-5707-46cb-ace6-8884bcd695b1",
                "name": "test测试",
                "beginTime": "21:00",
                "endTime": "03:00",
                "descript": "test",
                "isSystemDefault": "0",
                "checked": null,
                "companyName": "易云公司"
            },
            {
                "createTime": 1462248733000,
                "createUserId": "001",
                "updateTime": 1462248733000,
                "updateUserId": "001",
                "status": "1",
                "id": "75ceb414-173c-4091-b2d7-95e03d5e09c7",
                "name": "1111222",
                "beginTime": "22:00",
                "endTime": "01:00",
                "descript": null,
                "isSystemDefault": "1",
                "checked": null,
                "companyName": "-"
            },
            {
                "createTime": 1461824128000,
                "createUserId": "001",
                "updateTime": 1461824128000,
                "updateUserId": "001",
                "status": "1",
                "id": "620d314c-3b25-4cc7-ac8e-b7e4691b25ec",
                "name": "ceshi",
                "beginTime": "08:00",
                "endTime": "17:00",
                "descript": null,
                "isSystemDefault": "1",
                "checked": null,
                "companyName": "-"
            },
            {
                "createTime": 1461203274000,
                "createUserId": "001",
                "updateTime": 1461203274000,
                "updateUserId": "001",
                "status": "1",
                "id": "e8552ec1-e9a6-47e0-9bce-775f1e0f337c",
                "name": "测试",
                "beginTime": "08:30",
                "endTime": "17:30",
                "descript": "test",
                "isSystemDefault": "1",
                "checked": null,
                "companyName": "-"
            },
            {
                "createTime": 1460459522000,
                "createUserId": "001",
                "updateTime": 1460459522000,
                "updateUserId": "001",
                "status": "1",
                "id": "ff71fc30-85c7-45b9-8c81-8334afcebe6b",
                "name": "张珊珊测试",
                "beginTime": "08:00",
                "endTime": "17:00",
                "descript": "张珊珊测试",
                "isSystemDefault": "1",
                "checked": null,
                "companyName": "-"
            },
            {
                "createTime": 1459404155000,
                "createUserId": "001",
                "updateTime": 1460093532000,
                "updateUserId": "001",
                "status": "1",
                "id": "71ce9306-c0da-44df-98d0-a0099975f916",
                "name": "2次打卡",
                "beginTime": "08:00",
                "endTime": "18:00",
                "descript": null,
                "isSystemDefault": "1",
                "checked": null,
                "companyName": "-"
            },
            {
                "createTime": 1460092556000,
                "createUserId": "001",
                "updateTime": 1460092575000,
                "updateUserId": "001",
                "status": "1",
                "id": "a9fb1cf8-c5b2-40f3-a636-5e28ddddb0ad",
                "name": "4次打卡下午",
                "beginTime": "13:30",
                "endTime": "16:30",
                "descript": null,
                "isSystemDefault": "1",
                "checked": null,
                "companyName": "-"
            },
            {
                "createTime": 1460092533000,
                "createUserId": "001",
                "updateTime": 1460092567000,
                "updateUserId": "001",
                "status": "1",
                "id": "7cbb3298-f757-4347-a399-6f89f0ea7dda",
                "name": "4次打卡上午",
                "beginTime": "08:30",
                "endTime": "11:30",
                "descript": null,
                "isSystemDefault": "1",
                "checked": null,
                "companyName": "-"
            }
        ],
        "resultAllList": null,
        "resultDTO": null,
        "msg": "查询成功",
        "success": true,
        "baseResultTitle": null

      });
    }, 500);
  },
  '/menu': function(req,res){
    setTimeout(function(){
      res.json({
        success:true,
        menulist:[{
                id: '001',
                code: 'classManage',
                title: '班包班次管理',
                subMenus: [{
                   id:'0101',
                   code:'classFlight',
                   title:'班次管理',
                   url:'classManage/classFlight'
                },{
                    id: '0102',
                    code: 'classPackageManager',
                    title: '班包管理',
                    url:'classManage/classPackageManager'                    
                },{
                    id: '0103',
                    code: 'classPackageGroup',
                    title: '班包员工绑定',
                    url:'classManage/classPackageGroup'
                },{
                    id: '0104',
                    code: 'list',
                    title: '员工班包绑定',
                    url:'classManage/classUserInfoGroup'
                }
                ]
            },{
                id: '02',
                code: 'error',
                title: '考勤异常处理',
                subMenus: [{
                    id: '0201',
                    code: 'leaveInfo',
                    title: '请假信息处理',
                    url:'error/leaveInfo'
                },{
                    id: '0202',
                    code: 'businessInfo',
                    title: '公出信息处理',
                    url:'error/businessInfo'
                },{
                    id: '0203',
                    code: 'autoInputAbnormal',
                    title: '手动添加异常',
                    url:'error/autoInputAbnormal'
                },{
                    id: '0204',
                    code: 'overtimeInfo',
                    title: '加班信息处理',
                    url:'error/overtimeInfo'
                },{
                    id: '0205',
                    code: 'abnormalHandle',
                    title: '异常考勤处理',
                    url:'error/abnormalHandle'
                }
                ]
            },{
                id: '03',
                code: 'reportManage',
                title: '报表管理',
                subMenus: [{
                    id: '0301',
                    code: 'originalInfo',
                    title: '考勤原始数据',
                    url:'reportManage/originalInfo'
                },{
                    id: '0302',
                    code: 'resultInfo',
                    title: '考勤结果数据',
                    url:'reportManage/resultInfo'
                },{
                    id: '0303',
                    code: 'gatherreport',
                    title: '考勤月度汇总报表',
                    url:'reportManage/gatherreport'
                },{
                    id: '0304',
                    code: 'monthreport',
                    title: '考勤月报表',
                    url:'reportManage/monthreport'
                },{
                    id: '0305',
                    code: 'dayreport',
                    title: '考勤部门日报表',
                    url:'reportManage/dayreport'
                },{
                    id: '0305',
                    code: 'absencereport',
                    title: '考勤缺勤明细报表',
                    url:'reportManage/absencereport'
                },{
                    id: '0305',
                    code: 'exceptionreport',
                    title: '考勤异常明细表',
                    url:'reportManage/exceptionreport'
                },{
                    id: '0305',
                    code: 'attenresultreport',
                    title: '考勤结果详情表',
                    url:'reportManage/attenresultreport'
                },{
                    id: '0305',
                    code: 'timebank',
                    title: '综合工时报表',
                    url:'reportManage/timebank'
                },{
                    id: '0305',
                    code: 'timebank',
                    title: '时间银行报表',
                    url:'reportManage/timebank'
                }
                ]
            },{
                id: '04',
                code: 'sysManage',
                title: '报表管理',
                subMenus: [{
                    id: '0401',
                    code: 'resultCommit',
                    title: '考勤结果提交',
                    url:'sysManage/resultCommit'
                },{
                    id: '0402',
                    code: 'festival',
                    title: '节假日管理',
                    url:'sysManage/festival'
                },{
                    id: '0403',
                    code: 'department',
                    title: '组织机构管理',
                    url:'sysManage/department'
                },{
                    id: '0404',
                    code: 'userInfo',
                    title: '员工信息管理',
                    url:'sysManage/userInfo'
                },{
                    id: '0405',
                    code: 'logInfo',
                    title: '考勤日志管理',
                    url:'sysManage/logInfo'
                },{
                    id: '0405',
                    code: 'configure',
                    title: '考勤配置管理',
                    url:'sysManage/configure'
                },{
                    id: '0405',
                    code: 'baseday',
                    title: '基准日设置',
                    url:'sysManage/baseday'
                },{
                    id: '0405',
                    code: 'coordinates',
                    title: '移动打卡设置',
                    url:'sysManage/coordinates'
                },{
                    id: '0405',
                    code: 'timebank',
                    title: '时间银行参数设置',
                    url:'sysManage/timebank'
                }
                ]
            },{
                id: '05',
                code: 'accessManage',
                title: '权限管理',
                subMenus: [{
                    id: '0501',
                    code: 'menuManage',
                    title: '菜单管理',
                    url:'accessManage/menuManage'
                },{
                    id: '0502',
                    code: 'attendanceUserInfo',
                    title: '考勤员管理',
                    url:'accessManage/attendanceUserInfo'
                },{
                    id: '0503',
                    code: 'buttonManage',
                    title: '按钮管理',
                    url:'accessManage/buttonManage'
                },{
                    id: '0504',
                    code: 'roleManage',
                    title: '角色管理',
                    url:'accessManage/roleManage'
                }
                ]
            },{
                id: '06',
                code: 'feedback',
                title: '投诉反馈',
                url:'feedback'
            }

            ]
      })
    })
  },
};
