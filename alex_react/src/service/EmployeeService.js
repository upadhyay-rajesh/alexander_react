import axios from 'axios';

class EmployeeService{
    getAllRecord(){
        return axios.get("http://localhost:10000/viewAllprofile");
    }

    deleteRecord(id){
        return axios.delete("http://localhost:10000/deleteprofile/"+id);
    }
    getEmployeeById(id){
        return axios.get("http://localhost:10000/viewprofile/"+id+"/abc");
    }
    //todo 1 create record of employee
    //todo 2 edit record
}

export default new EmployeeService();