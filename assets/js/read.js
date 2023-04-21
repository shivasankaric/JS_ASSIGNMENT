//Get the image for album 
const getAlbumImage = async(albumId) => {
    const api = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;
    const response = await fetch(api);
    const images = await response.json();
    return images[0].thumbnailUrl;
}


//Pop up the album details
const viewPopup = async(albumId) => {
    displayLoading();

    const api = `https://jsonplaceholder.typicode.com/albums/${albumId}`;
    const response = await fetch(api);
    const album = await response.json();

    const albumDetails = document.querySelectorAll(".albumDetails");
    albumDetails[1].src = await getAlbumImage(album.id);
    albumDetails[0].innerHTML = albumDetails[2].innerHTML =album.id;
    albumDetails[3].innerHTML = album.title;
    albumDetails[4].innerHTML = album.userId;

    hideLoading();
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
const updateTable = (albums) => {
    const table = document.querySelector('#albums tbody');
    albums.map(album => {
        table.innerHTML += 
        `<tr class = "album" >
            <td>${album.id}</td>
            <td>${album.title}</td>
            <td>${album.userId}</td>
            <td><i onclick = viewPopup(${album.id}) class="fa-solid fa-eye"></i></td>
            <td><i onclick = updatePopup(${album.id}) class="fa-solid fa-pen-to-square"></i></td>
            <td><i onclick = deletePopup(${album.id}) class="fa-solid fa-trash-can"></i></td>
        </tr>`
    })
}

//loadAlbums
const loadAlbums = async() => {
    displayLoading();

    let loadedAlbumsNumber = (document.querySelectorAll(".album")).length;
    const currentPage = Math.ceil(loadedAlbumsNumber/20);
    const api = `https://jsonplaceholder.typicode.com/albums?_sort=${listOptions.sortProperty}&_order=${listOptions.order}&_page=${currentPage + 1}&_limit=20`;

    const response = await fetch(api);
    const albums = await response.json();
    updateTable(albums);
    hideLoading();


    loadedAlbumsNumber = (document.querySelectorAll(".album")).length;

    document.getElementById("load").style.display = (loadedAlbumsNumber === numberOfAlbums) ? "none" : "block";

}

//Retrieve the albums from the api
const read = async() => {
    displayLoading();

    listOptions.sortProperty = "id";
    listOptions.order = "desc";
    
    const api = "https://jsonplaceholder.typicode.com/albums?_sort=id&_order=desc&_page=1&_limit=20";
    const response = await fetch(api);
    const albums = await response.json();

    hideLoading();

    displayTable();
    await updateTable(albums);
    

    //number of albums
    numberOfAlbums = await getNumberOfAlbums();

    document.getElementById("load").style.display = "block";
}

//Display the table with the list of albums
read();