var movies = document.querySelector('#data').textContent;
var movieDetails = document.querySelector('#data').textContent;
movies = JSON.parse(movies);

let output="";
console.log(typeof movies);
movies.forEach(function(movie,index){
    output += `
    <div class="col-md-4">
     <div class="well text-center">
       <img src="${movie.Poster}">
       <h5>${movie.Title}</h5>
       <a onclick="movieSelected(${index})" class="btn btn-primary" href="#">Movie Details</a>
     </div>
    </div>
    `;
});

$("#movies").html(output);

function movieSelected(index){
  sessionStorage.setItem("index", index);
  sessionStorage.setItem("movieDetails", movieDetails);
  window.location='movie.html';
  return false;
}

