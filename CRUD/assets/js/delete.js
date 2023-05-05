//Pop up the delete confirmation popup
const deletePopup = (albumId) => {
    let deletePopup = document.getElementById("deletePopup");
    deletePopup.classList.add("flex");
    const button = document.getElementById("deleteButton");
    button.addEventListener('click', deleteAlbum.bind(null, albumId));
}

//Close popup form
const closeDeletePopUp = () => {
    document.getElementById("deletePopup").classList.remove("flex");
}

//Delete a particular album
const deleteAlbum = async(albumId) =>{
    displayLoading();
    
    try{
        const response = await fetch(api + albumId, {
            method:'DELETE'
        });
        result = await response.json();

        const index = albumsData.findIndex( album => album.id === albumId);
        delete albumsData[index];

        hideLoading();
        console.log("Success:", result);

        //Close the popup
        closeDeletePopUp();

        numberOfAlbums--;

        //Display the table with the list of albums after deletion
        read();

    }catch(err){
        console.error("Error:", err)
    }
}
