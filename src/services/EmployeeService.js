import axios from 'axios';
const GET_EMPLOYEE_URL ="http://localhost:1001/api/v1/employees";
class EmployeeService {
    getListOfEmployees(){
        return axios.get(GET_EMPLOYEE_URL);
    }

}
export default new EmployeeService();