const fetch = require('node-fetch');

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => {
    if (response.status === 200) {
      console.log('Correct status code (200)');
    } else {
      console.log(`Incorrect status code (${response.status})`);
    }
  })
  .catch(error => {
    console.error(error);
  });
