const baseURL = 'http://pokeapi.co/api/v2/';

const pokemonURL = num => `${baseURL}pokemon/${num}/`;

const getPokemon = number =>
  fetch(pokemonURL(number))
    .then(response =>
      response.json()
    )
    .then(json =>
      drawPokemon(json)
    )

const drawPokemon = pokemonData => {
  const{
    name,
    id,
    sprites: {front_default: image},
    types: [{type: {name: type}}]
  } = pokemonData;

  const results = document.querySelector('.results');
  results.innerHTML += `
    <span class="card">
      <p>${id}</p>
      <p>${name}</p>
      <p>Tipo ${type}</p>
      <img src="${image}" />
    </span>
  `;
};


getPokemon(151);
