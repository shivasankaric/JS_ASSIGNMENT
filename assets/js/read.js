//Get the image for album 
const getAlbumImage = async(albumId) => {
    const response = await fetch(api + albumId + "/photos");
    const images = await response.json();
    hideLoading();
    return (images.length) ? images[0].thumbnailUrl : "https://www.w3schools.com/howto/img_avatar2.png";
}


//Pop up the album details
const viewPopup = async(albumId) => {

    displayLoading();
    // const api = `https://jsonplaceholder.typicode.com/albums/${albumId}`;
    // const response = await fetch(api);
    // const album = await response.json();

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

    if(list.hasChildNodes()){
        const child1 = document.getElementById("albums");
        const child2 = document.getElementById("load");
        list.removeChild(child1);
        list.removeChild(child2);
    }


    const properties = [
        {
            header : "Id",
            name : "id"
        },
        {
            header : "Title",
            name : "title"
        },
        {
            header : "User Id",
            name : "userId"
        }
    ];

    const table = document.createElement("table");
    table.setAttribute("id", "albums");

    const tableHead = document.createElement("thead");
    const row = document.createElement("tr");

    for(let prop of properties){
        const tHead = document.createElement("th");
        tHead.innerText = prop.header;

        const div = document.createElement("div");
        div.classList.add("sortIcons");

        const icons = [];
        icons[0] = document.createElement("i");
        icons[0].classList.add('fa-solid', 'fa-caret-up');
        icons[0].addEventListener('click', sortAlbums.bind(null, prop.name, 'asc'));

        icons[1] = document.createElement("i");
        icons[1].classList.add('fa-solid', 'fa-caret-down');
        icons[1].addEventListener('click', sortAlbums.bind(null, prop.name, 'desc'));

        for(let icon of icons) div.append(icon);

        tHead.append(div);
        row.append(tHead);
    }

    const tHead = document.createElement("th");
    tHead.setAttribute("colspan", 3);
    tHead.innerText = "Options";

    row.append(tHead);

    tableHead.append(row);
    table.append(tableHead);

    const tBody = document.createElement("tbody");
    table.append(tBody);
    list.append(table);

    const button = document.createElement("button");
    button.innerText = "Load More";
    button.setAttribute("id", "load");
    button.addEventListener('click', loadAlbums);
    list.append(button);
    // list.innerHTML =
    // `<table id="albums">
    //         <thead>
    //             <tr>
    //                 <th>
    //                     Id
    //                     <div class = "sortIcons">
    //                             <i class="fa-solid fa-caret-up" onclick="sortAlbums('id','asc')"></i>
    //                             <i class="fa-solid fa-caret-down" onclick="sortAlbums('id','desc')"></i>
    //                     </div>
    //                 </th>
    //                 <th>
    //                     Title
    //                     <div class = "sortIcons">
    //                             <i class="fa-solid fa-caret-up" onclick="sortAlbums('title','asc')"></i>
    //                             <i class="fa-solid fa-caret-down" onclick="sortAlbums('title','desc')"></i>
    //                     </div>
    //                 </th>
    //                 <th>
    //                     User Id
    //                     <div class = "sortIcons">
    //                             <i class="fa-solid fa-caret-up" onclick="sortAlbums('userId','asc')"></i>
    //                             <i class="fa-solid fa-caret-down" onclick="sortAlbums('userId','desc')"></i>
    //                     </div>
    //                 </th>
    //                 <th colspan=3>Actions</th>
    //             </tr>
    //         </thead>
    //         <tbody></tbody>
    //     </table>
    //     <button id="load" onclick="loadAlbums()">Load More</button>`;
}

//Update the table with the loaded albums
const updateTable = (album) => {
    const table = document.querySelector('#albums tbody');

    const row = document.createElement("tr");
    row.classList.add("album");
    const data = [];
    const icons = [];

    data[0] = document.createElement("td");
    data[0].innerText = album.id;

    data[1] = document.createElement("td");
    data[1].innerText = album.title;

    data[2] = document.createElement("td");
    data[2].innerText = album.userId;

    data[3] = document.createElement("td");
    icons[0] = document.createElement("i");
    icons[0].classList.add('fa-solid', 'fa-eye');
    icons[0].addEventListener('click', viewPopup.bind(null, album.id));
    data[3].append(icons[0]);

    data[4] = document.createElement("td");
    icons[1] = document.createElement("i");
    icons[1].classList.add('fa-solid', 'fa-pen-to-square');
    icons[1].addEventListener('click', updatePopup.bind(null, album.id));
    data[4].append(icons[1]);

    data[5] = document.createElement("td");
    icons[2] = document.createElement("i");
    icons[2].classList.add('fa-solid', 'fa-trash-can');
    icons[2].addEventListener('click', deletePopup.bind(null, album.id));
    data[5].append(icons[2]);

    for(let ele of data) row.append(ele);

    table.append(row); 
    

}

//loadAlbums
const loadAlbums = () => {
    let loadedAlbumsNumber = (document.querySelectorAll(".album")).length;

    let start = loadedAlbumsNumber;
    let end = (loadedAlbumsNumber + limit) <= numberOfAlbums ? 
            (loadedAlbumsNumber + limit) :
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
    for(let i=0;i<limit;i++) updateTable(albumsData[i]);

    document.getElementById("load").style.display = "block";
}

const fetchAlbums = async() => {
    displayLoading();
    const response = await fetch(api);
    albumsData = await response.json();
    numberOfAlbums = albumsData.length;
    hideLoading();

    read();
}

//Display the table with the list of albums
fetchAlbums();