//number of albums
let numberOfAlbums;

//Pop up the create form
const createPopup = () => {
    document.getElementById("createPopup").classList.add("flex");
}

//Close popup form
const closeCreatePopUp = () => {
    document.getElementById("createPopup").classList.remove("flex");
}

//Count the number of albums
const getNumberOfAlbums = async() =>{
    const api = "https://jsonplaceholder.typicode.com/albums/";
    const response = await fetch(api);
    const data = await response.json();
    return data.length;
}

//Create a new album and add album to the list
const createAlbum = async (e) => {
    e.preventDefault();
    displayLoading();

    const api = "https://jsonplaceholder.typicode.com/albums/";    

    const form = document.getElementById("createAlbum");
    const submitter = document.querySelector("button[value=Create]");
    const data = new FormData(form, submitter);

    const newAlbum = {};

    for(let [key,value] of data){
        newAlbum[key] = value;
    }

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

        //Change the number of albums
        numberOfAlbums = await getNumberOfAlbums();

        //display the table after updation
        read();
        
        closeCreatePopUp();
        
    } catch (err) {
        console.error("Error:", err);
    }

}