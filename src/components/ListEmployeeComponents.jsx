import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import { withRouter } from "react-router";




export default class ListEmployeeComponents extends Component {
   
  state={
      employees:[]
  }
  constructor(props){
      super(props)
        this.addEmployee = this.addEmployee.bind(this);

  }
  componentDidMount(){
      EmployeeService.getListOfEmployees().then((response) =>{
                this.setState({employees:response.data});
  });
  }
  addEmployee(){
      console.log('add employee')
      this.props.history.push('/addemployee');
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Employee List</h2>
        <div className="btn btn-primary" onClick ={this.addEmployee}>
                    Add Employee
        </div>
        <div className="row">
            <table className ="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email Address</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {
                        this.state.employees.map(
                            employee=>(
                                <tr key = {employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td></td>
                                
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
      
      </div>
    )
  }
}

