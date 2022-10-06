import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

export default class ListEmployeeComponents extends Component {
   
  state={
      employees:[]
  }
  componentDidMount(){
      EmployeeService.getListOfEmployees().then((response) =>{
                this.setState({employees:response.data});
  });
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Employee List</h2>
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
                            employee=>{
                                <tr key = {employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                
                                </tr>
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
      
      </div>
    )
  }
}

