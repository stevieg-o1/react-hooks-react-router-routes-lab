import React from 'react';

const movies = [
  { title: 'Doctor Strange', time: '115min', genres: ['Action',`Adventure`,`Fantasy`,] },
  { title: 'Trolls', time: '92min', genres: [`Animation`,`Adventure`,`Comedy`,`Family`,`Fantasy`,] },
  { title: 'Jack Reacher: Never go back', time: '118min', genres: ['Action', 'Adventure', 'Crime',`Mystery`,`Thriller`,] },
];

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>

      {movies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <p>Time: {movie.time}</p>
          <ul>
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Movies;