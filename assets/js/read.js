//Get the image for album 
const getAlbumImage = async(albumId) => {
    const api = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;
    const response = await fetch(api);
    const images = await response.json();
    hideLoading();
    return (images.length) ? images[0].thumbnailUrl : "https://www.w3schools.com/howto/img_avatar2.png";
}


//Pop up the album details
const viewPopup = async(albumId) => {

    displayLoading();
    const album = albumsData.find( album => album.id === albumId);
    
    const albumDetails = document.querySelectorAll(".albumDetails");
    albumDetails[1].src = await getAlbumImage(album.id);
    albumDetails[0].innerHTML = albumDetails[2].innerHTML =album.id;
    albumDetails[3].innerHTML = album.title;
    albumDetails[4].innerHTML = album.userId;

    document.getElementById("viewPopup").classList.add("flex");
}

//Close popup form
const closeViewPopUp = () => {
    document.getElementById("viewPopup").classList.remove("flex");
}

//Display the list in table format
const displayTable = () =>{
    const list = document.getElementById("list");
    list.innerHTML =
    `<div>
        
        <table id="albums">
            <tbody>
                <tr>
                    <td>Id</td>
                    <td>Title</td>
                    <td>User Id</td>
                    <td>View</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
            </tbody>
        </table>
        <button id="load" onclick="loadAlbums()">Load More</button>
    </div>`;
}

//Update the table with the loaded albums
const updateTable = (album) => {
    const table = document.querySelector('#albums tbody');
    table.innerHTML += 
    `<tr class = "album" >
        <td>${album.id}</td>
        <td>${album.title}</td>
        <td>${album.userId}</td>
        <td><i onclick = viewPopup(${album.id}) class="fa-solid fa-eye"></i></td>
        <td><i onclick = updatePopup(${album.id}) class="fa-solid fa-pen-to-square"></i></td>
        <td><i onclick = deletePopup(${album.id}) class="fa-solid fa-trash-can"></i></td>
    </tr>`
}

//loadAlbums
const loadAlbums = () => {
    let loadedAlbumsNumber = (document.querySelectorAll(".album")).length;

    let start = loadedAlbumsNumber;
    let end = (loadedAlbumsNumber + 20) === numberOfAlbums ? 
            (loadedAlbumsNumber + 20) :
            (numberOfAlbums - loadedAlbumsNumber);

    if( start > end ) return;

    for(let i=start;i<end;i++) {
        updateTable(albumsData[i]);
    }


    loadedAlbumsNumber = (document.querySelectorAll(".album")).length;

    document.getElementById("load").style.display = (loadedAlbumsNumber === numberOfAlbums) ? "none" : "block";

}

//Retrieve the albums from the api
const read = () => {   
    displayLoading();
    displayTable();
    
    sortDesc();
    for(let i=0;i<20;i++) updateTable(albumsData[i]);

    document.getElementById("load").style.display = "block";
}

const fetchAlbums = async() => {
    displayLoading();
    const api = "https://jsonplaceholder.typicode.com/albums";
    const response = await fetch(api);
    albumsData = await response.json();
    numberOfAlbums = albumsData.length;
    hideLoading();

    read();
}

//Display the table with the list of albums
fetchAlbums();