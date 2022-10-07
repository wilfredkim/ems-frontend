import React, { Component } from 'react'

export default class CreateEmployeeComponent extends Component {
 constructor(props){
        super(props)
        
        
      this.state ={
          firstName:'',
          lastName :'',
          email : ''
      }
      this.saveEmployee =this.saveEmployee.bind(this);
      this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
      this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
      this.changeEmailHandler = this.changeEmailHandler.bind(this);

  }
  
 
 

  saveEmployee = (e) =>{
    e.preventDefault();
    let employee ={firstName:this.state.firstName,lastName:this.state.lastName,email:this.state.email };
    console.log('employee>>>>>>>>>>>>>> '+JSON.stringify(employee));
  }
  changeFirstNameHandler= (event)=>{
      this.setState({firstName:event.target.value});
  }
   changeLastNameHandler= (event)=>{
      this.setState({lastName:event.target.value});
  } 
  
  changeEmailHandler= (event)=>{
      this.setState({email:event.target.value});
  }
  cancel(){
          this.props.history.push('/employees');

  }
  render() {
    return (
      <div className="container">
      <div className ="row">
      <div className ="card col-md-6 offset-md-3 offset-md-3">
                    <h1 className="text-center">Add New</h1>
             <div className="card-body">
              <form>
                    <div className="form-group">
                        <label htmlFor="name">First Name: </label>
                        <input placeholder = "first name" name ="firstName" className ="form-control"
                            value ={this.state.firstName}  onChange ={this.changeFirstNameHandler} />
                   </div> 

                    <br/>
                   <div className="form-group">
                          <label htmlFor="name">Last Name: </label>
                          <input placeholder = "last name" name ="lastName" className ="form-control"
                              value ={this.state.lastName} onChange ={this.changeLastNameHandler} />
                  </div> 
                   <br/>
                    <div className="form-group">
                          <label htmlFor="name">Email Address: </label>
                          <input placeholder = "email address" name ="email" className ="form-control"
                              value ={this.state.email} onChange ={this.changeEmailHandler}/>
                  </div> 
                  <br/>
                  <button className="btn btn-success" onClick={this.saveEmployee} >Save</button>
                  <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
               </form>
             </div>

      </div>
      </div>
      </div>
 
    
  
    )
  }
}
