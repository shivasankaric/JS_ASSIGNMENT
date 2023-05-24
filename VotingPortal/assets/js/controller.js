const controller = {
    init(){
        if(!localStorage.getItem("employees")){
            model.updateEmployees(initialData);
            model.storeEmployees(initialData);
        }
        else{
            const employees = JSON.parse(localStorage.getItem("employees"));
            model.updateEmployees(employees);
        } 
        this.updateView( "poll" );
    },
    bindEvents(){},
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