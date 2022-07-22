function getMovie(){
    
    var index = sessionStorage.getItem("index");
    var movieDetails = sessionStorage.getItem("movieDetails");
    movieDetails = JSON.parse(movieDetails);
    
    var movie = movieDetails[index];
    console.log(movie);
    let output = "";
    output = `
    <div class="row">
      <div class="col-md-4">
         <img src = "${movie.Poster}" class="thumbnail">
         
      </div>
      <div class="col-md-8">
        <h2>${movie.Title}</h2>
        <ul class="list-group">
           <li class="list-group-item"><strong>Genre:  </strong>${movie.Genre}</li>
           <li class="list-group-item"><strong>Released:  </strong>${movie.Released}</li>
           <li class="list-group-item"><strong>Runtime:  </strong>${movie.Runtime}</li>
           <li class="list-group-item"><strong>Rated:  </strong>${movie.Rated}</li>
           <li class="list-group-item"><strong>IMDB Rating:  </strong>${movie.imdbRating}</li>
           <li class="list-group-item"><strong>Director:  </strong>${movie.Director}</li>
           <li class="list-group-item"><strong>Writer:  </strong>${movie.Writer}</li>
           <li class="list-group-item"><strong>BoxOffice:  </strong>${movie.BoxOffice}</li>
        </ul>
      </div>
    </div>
    <div class="row">
        <div class="well">
          <h3>Plot</h3>
          ${movie.Plot}
          <hr>
          <a href="http://imdb.com/title/${movie.imdbID}" target="blank" class="btn btn-primary">View IMDB</a>
        </div>
    </div>
    `;
    $("#movie").html(output);
    
}

