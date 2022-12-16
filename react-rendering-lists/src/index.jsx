import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function PokemonName(props) {
  const pokemon = props.pokedex;
  const pokemonList = pokemon.map(pokemon =>
    <li key={pokemon.number}>{pokemon.name}</li>
  );
  return (
    <ul>{pokemonList}</ul>
  );
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<PokemonName pokedex={pokedex}/>);
