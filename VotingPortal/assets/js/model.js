const model = {
    employees : [],
    getEmployees(){
        return this.employees;
    },
    getNoOfEmployees(){
        return this.employees.length;
    },
    getEmployeeIndex( prop, value ){
        const empIndex = this.employees.findIndex( emp => emp[prop] === value);
        return empIndex;
    },
    getLastEmpId(){
        const lastEmpId = this.employees[ this.getNoOfEmployees() - 1].empId;
        return lastEmpId;
    }
}