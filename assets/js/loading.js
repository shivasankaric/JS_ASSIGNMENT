//Display loading spinner
const displayLoading = () =>{
    const loading = document.getElementById("loading");
    loading.classList.add("flex");
    setTimeout(()=>{
        loading.classList.remove("flex");
    },5000);
}

//Hide loading spinner
const hideLoading = () =>{
    const loading = document.getElementById("loading");
    if ( loading.classList.contains("flex") ) loading.classList.remove("flex");
}