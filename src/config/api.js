let host,baseUri;
if(process.env.NODE_ENV == "test"){
	host = "http://localhost:4000"; baseUri = host + "/";
}else{
	host = location.origin; baseUri = host + "/";
}
if(process.env.NODE_ENV == "production"){
	host = "http://localhost:8080";baseUri = host + "/GL_Attendance/";
}
//baseUri = "http://localhost:8080/GL_Attendance/";
//let prodhost = "";

export const API_CONFIG = {
	host:host,
	baseUri:baseUri,
	auth:"login/confirm.do",
	classFlight:"classManage/classFlight/doQuery.do",
	queryClassPackage:"classManage/classFlight/queryClassPackage.do",
	deleteAllClassFlight:"classManage/classFlight/doDelete.do",
	deleteClassFlight:"classManage/classFlight/doDelete.do",
	initTitle:"home/initTitle.do",
	addClassFlight:"classManage/classFlight/doInsert.do",
	editClassFlight:'classManage/classFlight/doUpdate.do',
	users:'users',
	menu:'menu'
}