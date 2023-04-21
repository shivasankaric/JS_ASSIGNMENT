//Pop up the delete confirmation popup
const deletePopup = (albumId) => {
    let deletePopup = document.getElementById("deletePopup");
    deletePopup.classList.add("flex");
    deletePopup.innerHTML =
    `<div>
        <p>Are you sure you want to delete the album ?</p>
        <div class="buttons">
            <button onclick = "deleteAlbum(${albumId})">Yes</button>
            <button onclick = "closeDeletePopUp()">No</button>
        </div>
        <i class="fa-solid fa-xmark" onclick="closeDeletePopUp()"></i>
    </div>`;

}

//Close popup form
const closeDeletePopUp = () => {
    document.getElementById("deletePopup").classList.remove("flex");
}

//Delete a particular album
const deleteAlbum = async(albumId) =>{
    displayLoading();
    const api = "https://jsonplaceholder.typicode.com/albums/";
    
    try{
        const response = await fetch(api + albumId, {
            method:'DELETE'
        });
        result = await response.json();

        hideLoading();
        console.log("Success:", result);

        //Change the number of albums
        numberOfAlbums = await getNumberOfAlbums();

        //Close the popup
        closeDeletePopUp();

        //Display the table with the list of albums after deletion
        read();

    }catch(err){
        console.error("Error:", err)
    }
}
