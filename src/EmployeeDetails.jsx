import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './index.css';

class EmployeeDetails extends Component {

  constructor(props){
    super(props);
    this.state={
      title: 'Employee Details',
      title1: 'CRUD Operations',
      act: 0,
      index: '',
      datas: []
    }
  } 

  componentDidMount(){
    this.refs.name.focus();
  }

  fSubmit = (e) =>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let type = this.refs.type.value;
    let email = this.refs.email.value;
    let number = this.refs.number.value;
    let job = this.refs.job.value;
    let dob = this.refs.dob.value;

    if(this.state.act === 0){   //new
      let data = {
        name, type, email, number, job, dob
      }
      datas.push(data);
    }else{                      //update
      let index = this.state.index;
      datas[index].name = name;
      datas[index].type = type;
      datas[index].email = email;
      datas[index].number = number;
      datas[index].job = job;
      datas[index].dob = dob;
    }    

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.type.value = data.type;
    this.refs.email.value = data.email;
    this.refs.number.value = data.number;
    this.refs.job.value = data.job;
    this.refs.dob.value = data.dob;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.name.focus();
  }  

  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
        <div className="login-box-2">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="Employee name" className="formField" />
          <input type="text" ref="type" placeholder="Employee Type" className="formField" />
          <input type="text" ref="email" placeholder="Employee Email" className="formField" />
          <input type="text" ref="number" placeholder="Employee Number" className="formField" />
          <input type="text" ref="job" placeholder="Job Title" className="formField" />
          <input type="text" ref="dob" placeholder="Date Of Birth" className="formField" />
          <button onClick={(e)=>this.fSubmit(e)} className="myButton">submit </button>
        </form>
        </div>
        <div className="login-box-2">
          <h2>{this.state.title1}</h2>
          {datas.map((data, i) =>
            <li key={i} className="myList">
              {i+1}. {data.name}<br/> {data.type}<br/> {data.email}<br/> 
              {data.number}<br/> {data.job}<br/> {data.dob}<br/>
              <DeleteIcon onClick={()=>this.fRemove(i)} className="myListButton">remove </DeleteIcon>
              <EditIcon onClick={()=>this.fEdit(i)} className="myListButton">edit </EditIcon>
            </li>
          )}
        </div>
      </div>
    );
  }
}

export default EmployeeDetails;
