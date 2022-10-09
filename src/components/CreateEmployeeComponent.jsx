import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

export default class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      email: "",
    };
    this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
  }
  componentDidMount() {
    if (this.state.id === '_add') {
      return;
    } else {
      EmployeeService.getEmployeeById(this.state.id).then((response) => {
        let employee = response.data;
        this.setState({
          firstName: employee.firstName,
          lastName: employee.lastName,
          email: employee.email,
        });
      });
    }
  }

  saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    };
    console.log("employee>>>>>>>>>>>>>> " + JSON.stringify(employee));
    if (this.state.id === '_add') {
        EmployeeService.createEmployeeService(employee).then((response) => {
          this.props.history.push("/employees");
        });
    } else {
        EmployeeService.updateEmployee(this.state.id, employee).then((res) => {
          this.props.history.push("/employees");
        });
    }
  };

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  cancel() {
    this.props.history.push("/employees");
  }
  getTitle() {
    if (this.state.id === '_add') {
      return (     <h1 className="text-center">Add New</h1>);
    }else{
      return (     <h1 className="text-center">Update Employee</h1>);

    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
          {
            this.getTitle()
          }
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name">First Name: </label>
                  <input
                    placeholder="first name"
                    name="firstName"
                    className="form-control"
                    value={this.state.firstName}
                    onChange={this.changeFirstNameHandler}
                  />
                </div>

                <br />
                <div className="form-group">
                  <label htmlFor="name">Last Name: </label>
                  <input
                    placeholder="last name"
                    name="lastName"
                    className="form-control"
                    value={this.state.lastName}
                    onChange={this.changeLastNameHandler}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="name">Email Address: </label>
                  <input
                    placeholder="email address"
                    name="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.changeEmailHandler}
                  />
                </div>
                <br />
                <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={this.cancel.bind(this)}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
