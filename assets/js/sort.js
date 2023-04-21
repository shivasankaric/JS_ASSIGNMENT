//Sort based on the key values
const sortAlbums = async(e,order) =>{
    e.preventDefault();

    displayLoading();

    const property = document.querySelector("#sort select").value;
    listOptions.sortProperty = property;
    listOptions.order = order;
    const api = `https://jsonplaceholder.typicode.com/albums?_sort=${property}&_order=${order}&_page=1&_limit=20`;
    const response = await fetch(api);
    const sortedAlbums = await response.json();

    hideLoading();

    displayTable();    
    updateTable(sortedAlbums);

    document.getElementById("load").style.display = "block";

}