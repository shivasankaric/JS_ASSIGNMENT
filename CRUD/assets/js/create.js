//Albums data
let albumsData = [];
let numberOfAlbums;
const api = "https://jsonplaceholder.typicode.com/albums/";
const limit = 20;

//Pop up the create form
const createPopup = () => {
    document.getElementById("createPopup").classList.add("flex");
}

//Close popup form
const closeCreatePopUp = () => {
    document.getElementById("createPopup").classList.remove("flex");
}

//Create a new album and add album to the list
const createAlbum = async (e) => {
    e.preventDefault();
    displayLoading();    

    const form = document.getElementById("createAlbum");
    const submitter = document.querySelector("button[value=Create]");
    const data = new FormData(form, submitter);

    const newAlbum = {};

    for(let [key,value] of data){
        newAlbum[key] = value;
    }

    sortAsc();
    newAlbum["id"] = albumsData[numberOfAlbums - 1].id + 1;

    try {
        const response = await fetch(api, {
          method: 'POST',
          body: JSON.stringify(newAlbum),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        });

        const result = await response.json();

        hideLoading();
        console.log("Success:", result);

        albumsData.push(newAlbum);

        numberOfAlbums++;

        //display the table after updation
        read();
        
        form.reset();
        closeCreatePopUp();
        
    } catch (err) {
        console.error("Error:", err);
    }

}