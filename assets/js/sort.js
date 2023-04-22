//Sort based on the key values
const sortAlbums = (e,order) =>{
    e.preventDefault();
    displayLoading();

    const prop = document.querySelector("#sort select").value;

    if(order === 'asc'){
        albumsData.sort((a,b) => a[prop] > b[prop] ? 1 : -1);
    }else{
        albumsData.sort((a,b) => a[prop] < b[prop] ? 1 : -1);
    }

    hideLoading();

    displayTable();    
    for(let i = 0 ; i < 20; i++) updateTable(albumsData[i]);

    document.getElementById("load").style.display = "block";

}