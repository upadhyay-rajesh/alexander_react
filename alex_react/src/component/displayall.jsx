import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';

class DisplayAllComponent extends Component {

    state={
        employees:[]
    }

 componentDidMount(){
     EmployeeService.getAllRecord().then(result=>{
         console.log(result);
         this.setState({employees:result.data})
     })
 }

 editEmployee=(id)=>{
    this.props.history.push(`/edit/${id}`);
 }
 viewEmployee=(id)=>{
    this.props.history.push(`/view/${id}`);
}
deleteEmployee=(id)=>{
     EmployeeService.deleteRecord(id).then(result=>{
         this.setState({employees:this.state.employees.filter(emp=>emp.email!==id)});
     })
}

    render() { 
        return <div>

            <table border="5">
                <thead>
                <tr><th>Name</th><th>Password</th><th>Email</th><th>Address</th></tr>
                </thead>
                <tbody>
                 {
                     this.state.employees.map(emp1=>
                <tr>
                    <td>{emp1.name}</td>
                    <td>{emp1.password}</td>
                    <td>{emp1.email}</td>
                    <td>{emp1.address}</td>
                    <td>
                        <button onClick={()=>this.editEmployee(emp1.email)}>Edit</button>
                        <button onClick={()=>this.deleteEmployee(emp1.email)}>Delete</button>
                        <button onClick={()=>this.viewEmployee(emp1.email)}>View</button>
                    </td>
                </tr>
                     )
                 }
                </tbody>
            </table>
        </div>;
    }
}
 
export default DisplayAllComponent;