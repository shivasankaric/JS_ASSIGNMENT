//Pop up the create form
const updatePopup = async(albumId) => {
    displayLoading();
    await editAlbum(albumId);
    hideLoading();
    document.getElementById("updatePopup").classList.add("flex");
}

//Close popup form
const closeUpdatePopUp = () => {
    document.getElementById("updatePopup").classList.remove("flex");
}

//Edit the album
const editAlbum = async(albumId) => {
    const api = "https://jsonplaceholder.typicode.com/albums/";
    const response = await fetch(api+albumId);
    const album = await response.json();

    const inputs = document.querySelectorAll("#updateAlbum input");
    inputs[0].value = album.id;
    inputs[1].value = album.title;
    inputs[2].value = album.userId;

    hideLoading();
}

// Update the album
const updateAlbum = async(e) => {
    e.preventDefault();
    displayLoading();
    const api = "https://jsonplaceholder.typicode.com/albums/";

    const form = document.getElementById("updateAlbum");
    const submitter = document.querySelector("button[value=Update]");
    const data = new FormData(form, submitter);

    const album = {};

    for(let [key,value] of data){
        album[key] = value;
    }

    const id = document.querySelector("#updateAlbum input[name=id]").value;

    try{
        await fetch(api+id, {
            method:'PATCH',
            body : JSON.stringify(album),
            headers : {
                "Content-Type" : "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(result => {
            hideLoading();
            console.log( "Success:", result)
        });

        //Change the number of albums
        numberOfAlbums = await getNumberOfAlbums();

        //Close the popup
        closeUpdatePopUp();

        //display the table after updation
        read();

    }catch(err){
        console.error("Error:",err);
    }

    
}