/*  API Information   */
const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1&#39';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

// Elements that will be used
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

//Function that requests the movie data from the Api using fetch.
  const showMovies = (url) => {
    fetch(url)
    .then( response => response.json())
    .then(function(data){
      console.log(data.results);
      data.results.forEach(element => {
        // Creating elements for data inside the main tag.
        const div = document.createElement('div');
        const image = document.createElement('img');
        const text = document.createElement('h2');
       
        text.innerHTML = `${element.title}`;
        image.src = IMGPATH + element.poster_path;
        // Appends a node as the last child of a node
        div.appendChild(image);
        div.appendChild(text);
        main.appendChild(div);
      }); 
    });
  }
showMovies(apiUrl);

form.addEventListener("submit", (e) => {
  // Prevent the Form from submitting if the search bar is empty.
  e.preventDefault();
  main.innerHTML = '';
     
  const searchTerm = search.value;
  /* Adding the value writen in the search bar to the search Api,
    in order to get the movies we search for. */
    if (searchTerm) {
      showMovies(SEARCHAPI + searchTerm);
      search.value = "";
    }
});


