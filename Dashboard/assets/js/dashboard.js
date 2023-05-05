let barChart, pieChart, modalChart;

const drawModalChart = (day, prop) =>{
  if(modalChart){
    modalChart.destroy();
  }
  const desc = document.getElementById("desc");
  desc.innerText = `App wise distribution of ${prop} for ${day}`;
  modalChart = new Chart(
      document.getElementById('modalChart'),
      {
        type: 'doughnut',
        data: {
          labels: apps,
          datasets: [
            {
              label: document.querySelector(`#dropDown option[value = ${prop}]`).innerText,
              data: apps.map( app => getEachDayAppWiseUsage(day, app, prop)),
              backgroundColor : ["#4C3D3D", "#C07F00", "#FFD95A", "#3C2A21", "#9F8772", "#665A48"]
            }
          ]
        }
      }
  );
}

const modalPieChart = (event, clickedElements) => {
  if(clickedElements.length){
    console.log(clickedElements);
    const dayIndex = clickedElements[0].element.$context.dataIndex;
    const day = days[dayIndex];
    document.getElementById("modal").classList.add("flex");

    const dropDown = document.getElementById("dropDown");

    drawModalChart(day, dropDown.value);
  } 
}


const drawBarChart = ( prop ) => {
    if(barChart){
      barChart.destroy();
    }
    barChart = new Chart(
        document.getElementById('barchart'),
        {
          type: 'bar',
          data: {
            labels: days,
            datasets: [
              {
                label: document.querySelector(`#dropDown option[value = ${prop}]`).innerText,
                data: days.map( day => getDayWiseUsage( day, prop)),
                backgroundColor : ["#C07F00"]
              }
            ]
          },
          options: {
            onClick: modalPieChart
          }
        }
    );
}


const drawPieChart = ( prop ) => {
    if(pieChart){
      pieChart.destroy();
    }
    pieChart = new Chart(
        document.getElementById('doughnut'),
        {
          type: 'doughnut',
          data: {
            labels: apps,
            datasets: [
              {
                label: document.querySelector(`#dropDown option[value = ${prop}]`).innerText,
                data: apps.map( app => getAppWiseUsage(app, prop)),
                backgroundColor : ["#4C3D3D", "#C07F00", "#FFD95A", "#3C2A21", "#9F8772", "#665A48"]
              }
            ]
          }
        }
    );
}


const dropDown = document.getElementById("dropDown");
dropDown.addEventListener("change", () => {
  drawBarChart( dropDown.value );
  drawPieChart( dropDown.value);
});

const closeButton = document.getElementsByClassName("fa-times")[0];
closeButton.addEventListener("click", () => document.getElementById("modal").classList.remove("flex"));

drawBarChart( "screenTime" );
drawPieChart( "screenTime" );



