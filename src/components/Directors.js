import React from 'react';

const directors = [
  {
    name: 'Scott Derrickson',
    movies: [`Doctor Strange`,`Sinister`,`The Exorcism of Emily Rose`,]
  },
  {
    name: 'Mike Mitchell',
    movies: [`Trolls`,`Alvin and the Chipmunks:Chipwrecked`,`Sky High`,]
  },
  {
    name: `Edward Zwick`,
    movies:[`Jack Reacher:Never Go Back`,`Blood Diamon`,`The siege`,]
  }
];

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>

      {directors.map((director, index) => (
        <div key={index}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors;