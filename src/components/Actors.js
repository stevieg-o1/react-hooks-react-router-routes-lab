import React from 'react';

const actors = [
  {
   name:`Benedict Cumberbatch`,
   movies:[`Doctor Strange`, `The Imitation Game`, `Black Mass`,]
  },
  {
    name:`Justin Timberlake`,
    movies:[`Trolls`,`Friends with Benefits`,`The Social Network`,]
  },
  {
    name:`Anna Kendrick`,
    movies:[`Trolls`,`Pitch Perfect`,`Into The Wood`,]
  },
  {
    name:`Tom Cruise`,
    movies:[`Jack Reacher:Never Go Back`,`Mission Impossible`,`War of Woods`,]
  },
];

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>

      {actors.map((actor, index) => (
        <div key={index}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Actors;





