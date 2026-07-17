const container =
    document.getElementById("favoriteMovies");

let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

showMovies();

function showMovies() {

    container.innerHTML = "";

    if (favorites.length === 0) {

        container.innerHTML = `

<h2 style="margin:auto">

No Favorite Movies ❤️

</h2>

`;

        return;

    }

    favorites.forEach((movie, index) => {

        container.innerHTML += `

<div class="movie-card">

<div class="poster">

<img src="${movie.poster}">

</div>

<div class="details">

<div class="rating">

${movie.rating}

</div>

<h3>

${movie.title}

</h3>

<p>

${movie.genre}

</p>

<button
onclick="watch('${movie.trailer}')">

▶ Watch

</button>

<button
onclick="removeMovie(${index})">

🗑 Remove

</button>

</div>

</div>

`;

    });

}

function removeMovie(index) {

    favorites.splice(index, 1);

    localStorage.setItem(

        "favorites",

        JSON.stringify(favorites)

    );

    showMovies();

}

function watch(video) {

    window.location.href =

        "index.html";

}