const controller = {
    init(){
        if(!localStorage.getItem("employees")){
            this.updateEmployees(initialData);
            model.storeEmployees(initialData);
        }
        else{
            const employees = JSON.parse(localStorage.getItem("employees"));
            this.updateEmployees(employees);
        } 
        this.updateView( "poll" );
    },
    upVote( id ){
        const empIndex = model.getEmployeeIndex( "empId", id);
        model.employees[empIndex].votes++;
        view.slide(id);
    },
    downVote( id ){
        const empIndex = model.getEmployeeIndex( "empId", id);
        model.employees[empIndex].votes > 0 ? model.employees[empIndex].votes-- : 0;
        view.slide(id);
    },
    updateEmployees(data){
        model.employees = data;
    },
    storeEmployees(data){
        localStorage.setItem("employees", JSON.stringify(data));
    },
    updateView( content ){
        let viewContent;
        switch(content){
            case "poll" : viewContent = view.showPoll();
                          view.render(viewContent);
                          break;
            case "result" : viewContent = view.showResult();
                            view.render(viewContent);   
        }
    }
}

controller.init();