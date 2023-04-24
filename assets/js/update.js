//Pop up the create form
const updatePopup = async(albumId) => {
    editAlbum(albumId);
    document.getElementById("updatePopup").classList.add("flex");
}

//Close popup form
const closeUpdatePopUp = () => {
    document.getElementById("updatePopup").classList.remove("flex");
}

//Edit the album
const editAlbum = (albumId) => {

    const album = albumsData.find( album => album.id === albumId);

    const inputs = document.querySelectorAll("#updateAlbum input");
    inputs[0].value = album.id;
    inputs[1].value = album.title;
    inputs[2].value = album.userId;
}

// Update the album
const updateAlbum = async(e) => {
    e.preventDefault();
    displayLoading();
    const api = "https://jsonplaceholder.typicode.com/albums/";

    const form = document.getElementById("updateAlbum");
    const submitter = document.querySelector("button[value=Update]");
    const data = new FormData(form, submitter);

    const newAlbum = {};

    for(let [key,value] of data){
        newAlbum[key] = value;
    }

    const id = document.querySelector("#updateAlbum input[name=id]").value;
    newAlbum.id = +id;

    try{
        await fetch(api+id, {
            method:'PATCH',
            body : JSON.stringify(newAlbum),
            headers : {
                "Content-Type" : "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(result => {
            hideLoading();
            console.log( "Success:", result)
        });

        const index = albumsData.findIndex(album => album.id === newAlbum.id);
        albumsData[index] = newAlbum;

        //Close the popup
        closeUpdatePopUp();

        //display the table after updation
        read();

    }catch(err){
        console.error("Error:",err);
    }

    
}