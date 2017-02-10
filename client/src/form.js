import React, { PropTypes } from 'react'

class Form extends React.Component {
  constructor(){
    super();
    this.state={
      show:false,
      name:null,
      age:null,
      email:null,
      maleValue:0
    }
  }
  handleShow(){
    this.setState({
      show: !this.state.show,
      name: null,
      age: null,
      email: null
    })
  }
  checkName(_value){
    if(_value.length === 0){
      this.setState({name:'姓名不能为空'})
      return false
    }else{
      this.setState({name: null})
      return true
    }
  }
  checkAge(_value) {
    if(Math.floor(_value) == _value && _value >0){
      this.setState({age:null})
      return true
    }else{
      this.setState({age:'请输入一个大于0的整数'})
      return false
    }
  }
  checkEmail(_value) {
    let re= /\w@\w*\.\w/;
    if(re.test(_value)){
      this.setState({email:null})
      return true
    } else{
      this.setState({email:'请输入正确的邮箱格式'})
      return false
    }
  }
  handleBlur(e){
    let _id = e.target.getAttribute('id');
    let _target = document.getElementById(_id);
    let _value = _target.value.trim();
    if(_id === 'name'){
      this.checkName(_value)
    }
    if(_id === 'age'){
      this.checkAge(_value)
    }
    if(_id === 'email'){
      this.checkEmail(_value)
    }
  }
  handleSubmit(e){
    e.preventDefault();
    let name = this.refs.name.value;
    let age = this.refs.age.value;
    let male = this.state.maleValue;
    let email = this.refs.email.value;
    let cName = this.checkName(name);
    let cAge = this.checkName(age);
    let cEmail = this.checkName(email);
    if (cName===true&&cAge===true&&cEmail===true) {
      let postData ={name,age,male,email};
      this.props.action(postData,this.props.type);
    }else {
      alert('aaaa')
    }
  }
  handleChange(e){
    this.setState({maleValue:e.target.value});
  }
  render () {
    let content = this.state.show ?
      <div className='customcover'>
        <div className='customform'>
          <div className='clearfix' style={{marginBottom:'10px'}}>
            <h3 className='pull-left' style={{margin:'0'}}>
              {this.props.type==0 ? '添加成员信息' : '修改成员信息'}
            </h3>
            <span className='glyphicon glyphicon-remove pull-right' style={{fontSize:'20px'}} onClick={this.handleShow.bind(this)}></span>
          </div>
          <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <label htmlFor="name" className="col-sm-2 control-label">姓名</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="name" onBlur={this.handleBlur.bind(this)} ref='name'/>
              </div>
            </div>
            <p style={{color:'red'}}>{this.state.name}</p>
            <div className="form-group">
              <label htmlFor="age" className="col-sm-2 control-label">年龄</label>
              <div className="col-sm-10">
                <input type="number" className="form-control" id="age" onBlur={this.handleBlur.bind(this)} ref='age'/>
              </div>
            </div>
            <p style={{color:'red'}}>{this.state.age}</p>
            <div className="form-group">
              <label htmlFor="male" className="col-sm-2 control-label">性别</label>
              <div className="col-sm-10" style={{paddingTop:'5px'}}>
                <input type="radio" name="male" id="male" value="0" defaultChecked onChange={this.handleChange.bind(this)}/>&nbsp;&nbsp;
                <label htmlFor='male'>男</label>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" name="male" id="female" value="1" onChange={this.handleChange.bind(this)}/>&nbsp;&nbsp;
                <label htmlFor='female'>女</label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="col-sm-2 control-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="email" onBlur={this.handleBlur.bind(this)} ref='email'/>
              </div>
            </div>
            <p style={{color:'red'}}>{this.state.email}</p>
            <div className="form-group">
              <div className="pull-right" style={{marginRight:'20px'}}>
                <button type="submit" className="btn btn-default">确定</button>
                <a className="btn btn-default" role='button' onClick={this.handleShow.bind(this)}>取消</a>
              </div>
            </div>
          </form>
        </div>
      </div> : null
    return(
      <div>
        {content}
      </div>
    )
  }
}

export default Form;
