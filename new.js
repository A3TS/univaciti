const axios = require('axios');

const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

axios.get(url)
  .then(response => {
    console.log(response.status);
  })
  .catch(error => {
    console.error(error);
  });
