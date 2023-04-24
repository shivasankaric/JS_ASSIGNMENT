//Search album based on the title
const searchAlbum = (e) =>{
    e.preventDefault();

    const form = document.getElementById("search");
    const submitter = document.querySelector("button[value=Search]");

    const data = new FormData(form, submitter);

    let [[key,value]] = data;

    const searchAlbums = albumsData.filter( album => album.title.includes(value.trim()));

    console.log(searchAlbums);
    
    if(searchAlbums.length){
        displayTable();
        searchAlbums.map( album => updateTable(album));
    }
    else{
        document.getElementById("list").innerHTML = "<h1>Not found!</h>"
    }

    document.getElementById("list").innerHTML += `<button onclick="read()">Back to list</button>`;
    form.reset();  
    
}