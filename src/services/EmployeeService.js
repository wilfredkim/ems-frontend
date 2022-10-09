import axios from 'axios';
const API_EMPLOYEE_URL = "http://localhost:1001/api/v1/employees";

class EmployeeService {
    getListOfEmployees() {
        return axios.get(API_EMPLOYEE_URL);
    }

    createEmployeeService(employee) {
        return axios.post(API_EMPLOYEE_URL, employee);
    }

    getEmployeeById(employeeId) {
        return axios.get(API_EMPLOYEE_URL + '/' + employeeId);
    }
    updateEmployee(employeeId, employee) {
        return axios.put(API_EMPLOYEE_URL + '/' + employeeId, employee)
    }
    deleteEmployee(employeeId) {
        return axios.delete(API_EMPLOYEE_URL + '/' + employeeId);
    }

}
export default new EmployeeService();