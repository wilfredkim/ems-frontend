import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

export default class ListEmployeeComponents extends Component {
  state = {
    employees: [],
  };
  constructor(props) {
    super(props);
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.addEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.viewEmployee = this.viewEmployee.bind(this);
  }
  componentDidMount() {
    EmployeeService.getListOfEmployees().then((response) => {
      this.setState({ employees: response.data });
    });
  }
  addEmployee() {
    console.log("add employee");
    this.props.history.push(`/addemployee/_add`);
  }
  editEmployee(id) {
    this.props.history.push(`/addemployee/${id}`);
  }
  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then((response) => {
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
  }

  viewEmployee(id){
    this.props.history.push(`/view-employee/${id}`);
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Employee List</h2>
        <div className="btn btn-primary" onClick={this.addEmployee}>
          Add Employee
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>
                    <button type="button" className="btn btn-info" onClick={() => this.editEmployee(employee.id)} >Update </button>
                    <span></span>
                    <button  type="button" style={{marginLeft:"10px"}} className="btn btn-danger" onClick={() => this.deleteEmployee(employee.id)} > Delete </button>
                    <span></span>
                    <button type="button" style={{marginLeft:"10px"}} className="btn btn-success" onClick={() => this.viewEmployee(employee.id)} >  View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
