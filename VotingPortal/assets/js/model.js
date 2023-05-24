const model = {
    employees : [],
    upVote( id ){
        const empIndex = this.getEmployeeIndex( "empId", id);
        this.employees[empIndex].votes++;
        view.slide(id);
    },
    downVote( id ){
        const empIndex = this.getEmployeeIndex( "empId", id);
        this.employees[empIndex].votes > 0 ? this.employees[empIndex].votes-- : 0;
        view.slide(id);
    },
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
    },
    updateEmployees(data){
        this.employees = data;
    },
    storeEmployees(data){
        localStorage.setItem("employees", JSON.stringify(data));
    }
}