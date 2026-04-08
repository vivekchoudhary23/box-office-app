const movies = [
  { name: "Jawan", collection: "₹1140 Cr" },
  { name: "Pathaan", collection: "₹1050 Cr" },
  { name: "KGF 2", collection: "₹1200 Cr" },
  { name: "RRR", collection: "₹1250 Cr" }
];

const movieList = document.getElementById("movieList");
const search = document.getElementById("search");

function displayMovies(list) {
  movieList.innerHTML = "";
  list.forEach(movie => {
    movieList.innerHTML += `
      <div class="movie">
        <h2>${movie.name}</h2>
        <p>Collection: ${movie.collection}</p>
      </div>
    `;
  });
}

search.addEventListener("input", () => {
  const filtered = movies.filter(m =>
    m.name.toLowerCase().includes(search.value.toLowerCase())
  );
  displayMovies(filtered);
});

displayMovies(movies);
