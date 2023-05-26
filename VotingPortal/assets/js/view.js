const view = {
    render(data){
        const app = document.getElementById("app");
        if(app.hasChildNodes()) app.removeChild(app.firstChild);
        app.append(data);
    },
    slideRight(){
        const cards = document.getElementById("cards");
        cards.scrollBy(cards.offsetWidth, 0)
    },
    showPoll(){
        const cards = document.createElement("div");
        cards.setAttribute( "id", "cards");
        model.employees.forEach( employee => {
            cards.innerHTML += `
                <div class="card">
                    <div class="card__head"></div>
                    <img src=${employee.profile} alt=${employee.name} class="card__img">
                    <p>Emp Id: ${employee.empId}</p>
                    <p>${employee.name}</p>
                    <buttons class="card__buttons">
                        <button class="card__button" onclick= controller.upVote(${employee.empId})>Upvote</button>
                        <button class="card__button" onclick= controller.downVote(${employee.empId})>Downvote</button>
                    </buttons>
                </div>
            `;
        });
        return cards;
    },
    showResult(){
        const result = document.createElement("div");
        result.classList.add("result");
        const table = document.createElement("table");
        table.classList.add("result__table");
        table.innerHTML = `
            <thead class="result__rowHead">
                <th class="result__head">EmpId</th>
                <th class="result__head">Name</th>
                <th class="result__head">Profile</th>
                <th class="result__head">Votes</th>
            </thead>
            <tbody>
        `;

        model.employees.forEach( employee => {
            table.innerHTML += `
             <tr class = "result__row">
                <td class="result__cell">${employee.empId}</td>
                <td class="result__cell">${employee.name}</td>
                <td class="result__cell">
                    <img src = ${employee.profile} alt=${employee.name} class="result__img">
                </td>
                <td class="result__cell">${employee.votes}</td>
             </tr>
            `
        });
        table.innerHTML += `</tbody>`;
        result.append(table);

        result.innerHTML += `<button class="result__button" onclick="location.reload()">Vote again</button>`;
        return result;
    },
    slide(id){
        if(id !== model.getLastEmpId()){
            view.slideRight();
        }else{
            controller.updateEmployees(model.employees);
            controller.storeEmployees(model.employees);
            controller.updateView( "result" );
        }
    }
}