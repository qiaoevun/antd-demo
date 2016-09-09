import React , { Component, PropTypes } from 'react';
import { Form,Input,Button,InputNumber,Radio,Table,TimePicker, Icon,Col,Row, Popconfirm, message ,Modal} from 'antd';
import { connect } from 'react-redux';
import * as classActionCreators from './actions';
import { bindActionCreators } from 'redux'

import {URI_SAVE_OR_UPDATE_USER} from './../../../constant/uriConfig';

import {changeRoute} from './../../../actions/route';


import PureComponent from '../../PureComponent';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;


class ClassFlight extends PureComponent{

  constructor(props) {
    super(props);
    const {items,classpackage} = this.props.classFlight//.toJS();
    //const {getDataList} = this.props.actions;
    //actions.getDataList();
    //getDataList();
    const columns = [{
                        title: '班次名称',
                        dataIndex: 'name',
                        key: 'name',
                        width:200
                      }, {
                        title: '公司',
                        dataIndex: 'companyName',
                        key:'companyName',
                        width:200
                      }, {
                        title: '开始时间',
                        dataIndex: 'beginTime',
                        key:'beginTime',
                        width:100
                      }, {
                        title: '结束时间',
                        dataIndex: 'endTime',
                        key:'endTime',
                        width:100
                      }, {
                        title: '班包详情',
                        dataIndex: 'descript',
                        key:'descript',
                        width:300
                      }, {
                        title: '班次类型',
                        dataIndex: 'isSystemDefault',
                        key:'isSystemDefault',
                        render: function(text){
                            return text=='1'?'系统默认班次':'普通班次';
                            },
                        width:200
                      }, {
                        title: '操作',
                        key: 'operation',
                        width:200,
                        render: (text, record) => (
                          <span>
                            <a href="javascript:void(0);" onClick={this.onShowClass.bind(this,record.id)}>班包显示</a>
                            <span className="ant-divider"></span>
                            <a href="javascript:void(0);" onClick={this.onEdit.bind(this,'edit',record)}>编辑</a>
                            <span className="ant-divider"></span>
                            <a href="javascript:void(0);" onClick={this.onDelete.bind(this,record.id)}>删除</a>
                          </span>
                        )
                      }];
    const packageColumns = [
                            {
                              title: '班包名称',
                              dataIndex: 'name',
                              key: 'name',
                              width:200
                            }, {
                              title: '类型',
                              dataIndex: 'type',
                              key:'type',
                              width:200,
                              render: function(text){
                                return parseInt(text)==1?'按周排班':'按天排班';
                              }
                            }, {
                              title: '打卡次数',
                              dataIndex: 'recordType',
                              key:'recordType',
                              width:200,
                              render: function(text){
                                return parseInt(text)==0?'无需打卡':parseInt(text)==1?'二次打卡':'四次打卡';
                              }
                            }, {
                              title: '详情',
                              dataIndex: 'descript',
                              key:'descript',
                              width:200
                            }
                        ]
    this.state = {
      columns: columns,
      packageColumns:packageColumns,
      selectedRowKeys: [],  // 这里配置默认勾选列
      loading: false,
      modelVisiable:false,
      editVisiable:false,
      editloading:false,
      formValue:{
        id:'',
        name2:'',
        beginTime:'00:00',
        endTime:'00:00',
        descript:''
      }
    }
  }
  componentDidMount(){
    const {getDataList} = this.props.actions;
    getDataList(this.onError);
  }
  initData(){//获取数据
    const {getDataList} = this.props.actions;
    getDataList(this.onError);
  }
  onPageChange(current,pageSize){
    this.pageSize = pageSize;
    this.doSearch(current);
  }
  onSearch(e) {
    e.preventDefault();
    let {companyName,name} = this.props.form.getFieldsValue();
    const {getDataList} = this.props.actions;
    const {id} = this.props.auth.user;
    getDataList(this.onError,{companyName:companyName,name:name,loginId:id});
  }

  onEdit(type,record){
    //this.props.changeRoute(URI_SAVE_OR_UPDATE_USER + '/' + id);
    this.props.form.resetFields();
    if(type == 'edit'){//修改
      this.setState({
        formValue:{
          id:record.id,
          name2:record.name,
          beginTime:record.beginTime,
          endTime:record.endTime,
          descript:record.descript
        }
      })
    }else{//新增
      this.setState({
        formValue:{
        id:'',
        name2:'',
        beginTime:'00:00',
        endTime:'00:00',
        descript:''
      }
      })
    }
    this.setState({
      editVisiable:true
    })
  }
  onSubmitEdit(){
    this.props.form.validateFields((errors, values) => {
      if (!!errors) {
        return;
      }else{
        const formList = this.props.form.getFieldsValue();
        const {id} = this.state.formValue;
        const {id:userid} = this.props.auth.user;
        this.setState({
          editloading:true,
        })
        if(id){//编辑
          const {editClassFlight} = this.props.actions;
          editClassFlight(this.onEditError.bind(this),this.onEditSuccess.bind(this),{...formList,id:id,loginId:userid,name:formList.name2});
        }else{//新增
          const {addClassFlight} = this.props.actions;
          addClassFlight(this.onEditError.bind(this),this.onEditSuccess.bind(this),{...formList,loginId:userid,name:formList.name2});
        }
        //this.onHideEditModel();
      }
    });
  }
  onEditSuccess(){
    this.setState({
          editloading:false,
        })
    this.onHideEditModel();
    message.success("操作成功");
    this.initData();
  }
  onEditError(e){
    this.setState({
          editloading:false,
        })
  }
  onDelete(id) {
    const {deleteClassFlight} = this.props.actions;
    let {id:userid} = this.props.auth.user;
    deleteClassFlight(this.onError.bind(this),this.onDeleteSuccess.bind(this),userid,id);
  }

  generateRowKey(record, index) {
    return record.id;
  }
  onDeleteSuccess(){
    message.success("删除成功");
  }
  onDeleteAll() {
    this.setState({ loading: true });
    let selected = this.state.selectedRowKeys;
    let {id:userid} = this.props.auth.user;
    const {deleteAllClassFlight} = this.props.actions;
    deleteAllClassFlight(this.onError.bind(this),this.onDeleteAllSuccess.bind(this),this.onCancelDelete.bind(this),userid,selected);
  }

  onDeleteAllSuccess(){
    this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    message.success("删除成功");
  }
  onCancelDelete(){
    this.setState({
        selectedRowKeys: [],
        loading: false,
      });
  }
  onSelectChange(selectedRowKeys) {
    this.setState({ selectedRowKeys });
  }
  onShowClass(index){
    const {queryClassPackage} = this.props.actions;
    queryClassPackage(index);
    this.setState({ modelVisiable:true });
  }
  onHideModel(){
    this.setState({ modelVisiable:false });
  }
  onHideEditModel(){
    this.setState({ editVisiable:false });
  }
  onError(e){
    this.setState({
        selectedRowKeys: [],
        loading: false,
      });
  }
  render() {
    const {items,classpackage} = this.props.classFlight//.toJS();
    const {columns , packageColumns, loading, selectedRowKeys ,modelVisiable,formValue} = this.state;
    const {getFieldProps} = this.props.form;
    const pagination = {
      size: "small",
      //defaultCurrent:defaultCurrent,
      showQuickJumper: true,
      showSizeChanger: true
    };
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange.bind(this),
    };
    const hasSelected = selectedRowKeys.length > 0;
    const formItemLayout = {
      labelCol: { span: 10 },
      wrapperCol: { span: 8 },
    };
    //规则
    const name2Props = getFieldProps('name2', {
      initialValue:formValue.name2,
      rules: [
        { required: true,  message: '班次不能为空' }
      ],
    });
    const beginTimeProps = getFieldProps('beginTime', {
      getValueFromEvent:(time, timeString) => timeString,
      initialValue:formValue.beginTime,
      rules: [
        { required: true,  message: '开始时间不能为空' }
      ],
    });
    const endTimeProps = getFieldProps('endTime', {
      getValueFromEvent:(time, timeString) => timeString,
      initialValue:formValue.endTime,
      rules: [
        { required: true,  message: '结束时间不能为空' }
      ],
    });

    return (
      <div>
        {/*<div onClick={this.initData.bind(this)}>初始化</div>*/}
        
            <Form style={{padding:"5px 10px"}} inline onSubmit={this.onSearch.bind(this)}>
              <Button htmlType='submit' style={{marginRight:"10px"}} type="ghost" disabled={!hasSelected} loading={loading} onClick = {this.onDeleteAll.bind(this)}>批量删除</Button>
              <FormItem label="公司名称">
                <Input {...getFieldProps('companyName')} placeholder=""/>
              </FormItem>
              <FormItem label="班次名称">
                <Input {...getFieldProps('name')} placeholder=""/>
              </FormItem>
              <Button htmlType='submit' type="primary">查询</Button>
              <span>   </span>
              <Button htmlType='submit' type="ghost" onClick = {this.onEdit.bind(this,'add')}>增加</Button>
            </Form>
        <Row>
          <Col span={24}>
            <Table rowSelection={rowSelection} columns={columns} dataSource={items} pagination={pagination}
                 rowKey={this.generateRowKey}
                 scroll={{ x: true, y: 445 }} size='middle'/>
          </Col>
        </Row>
        <Modal title="绑定班包查看" visible={this.state.modelVisiable}
          onOk={this.onHideModel.bind(this)} onCancel={this.onHideModel.bind(this)}
        >
          <Table columns={packageColumns} dataSource={classpackage} pagination={pagination}
                 rowKey={this.generateRowKey}
                 scroll={{ x: true, y: 300 }} size='middle'/>
        </Modal>

        <Modal title="新增/编辑" visible={this.state.editVisiable} onCancel={this.onHideEditModel.bind(this)}
        footer={[
            <Button key="back" type="ghost" size="large" onClick={this.onHideEditModel.bind(this)}>取消</Button>,
            <Button key="submit" type="primary" size="large" loading={this.state.editloading} onClick={this.onSubmitEdit.bind(this)}>
              提交
            </Button>,
          ]}
        >
          <Form style={{padding:"5px 10px"}} >
              <FormItem label="班次" required {...formItemLayout}>
                <Input {...name2Props} placeholder=""/>
              </FormItem>
              <FormItem label="开始时间" {...formItemLayout} required>
                <TimePicker format="HH:mm" {...beginTimeProps} />
              </FormItem>
              <FormItem label="结束时间" {...formItemLayout} required>
                <TimePicker format="HH:mm" {...endTimeProps} />
              </FormItem>
              <FormItem label="描述" {...formItemLayout} >
                <Input type="textarea" {...getFieldProps('descript',{initialValue:formValue.descript})} rows="3" />
              </FormItem>
            </Form>
        </Modal>

      </div>
    );
  }
}

ClassFlight.propTypes = {
  //TODO
};

ClassFlight = Form.create()(ClassFlight);
function mapStateToProps(state) {
  return {classFlight:state.classFlight,
    auth:state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(classActionCreators, dispatch),
      changeRoute:bindActionCreators(changeRoute,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ClassFlight)