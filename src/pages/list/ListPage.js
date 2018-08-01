import React from 'react';

const movieList = [
  { id: 1, name: 'Iron Man' },
  { id: 2, name: 'Fast and Furious 5' },
  { id: 3, name: 'Dead Pool' },
  { id: 4, name: 'Avengers' },
];

const ListPage = () => (
  <div>
    <h3>ListPage</h3>
    {movieList.map(movie => <div key={movie.id}>{movie.name}</div>)}
  </div>
);

export default ListPage;
